import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import fs from 'fs';
import { join } from 'path';
import { PrismaService } from 'src/infra/prisma.service';
import { CatEntity } from './entities/cat.entity';
import { v4 as uuid_v4 } from 'uuid';

@Injectable()
export class CatsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create({ breed, name, image }: CreateCatInput) {
    const { createReadStream, filename } = await image;

    const [image_title, image_extension] = filename.split('.');

    const imageInformation = {
      id: uuid_v4(),
      title: image_title,
      extension: image_extension,
    };

    const structure_image_name = `${imageInformation.title}-${imageInformation.id}.${imageInformation.extension}`;

    //Saving image in disk
    new Promise(async (resolve) => {
      createReadStream()
        .pipe(
          fs.createWriteStream(
            join(process.cwd(), `/src/upload/${structure_image_name}`),
          ),
        )
        .on(
          'finish',
          () => resolve, //When resolve he return this information in promise, but I didn't not use.
        )
        .on('error', (error) => {
          console.log(error);

          throw new HttpException(
            'Could not save image',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        });
    });

    //Create Entity before save in database
    const catEntity = new CatEntity({
      name: name,
      breed: breed,
      image: structure_image_name,
    });

    //Saving then entity in database
    const catCreated = await this.prismaService.cat.create({
      data: catEntity,
    });

    //Send Cat back, but change cat image passing the application's domain
    return {
      ...catCreated,
      image: `http://localhost:3000/public/assets/${catCreated.image}`,
    };
  }

  async findAll(): Promise<CatEntity[]> {
    const allCats = await this.prismaService.cat.findMany();

    return allCats.map((_cat) => {
      return {
        ..._cat,
        image: `http://localhost:3000/public/assets/${_cat.image}`,
      };
    });
  }

  async remove(id: string) {
    const catExist = await this.prismaService.cat.findUnique({
      where: {
        id,
      },
    });

    if (!catExist)
      throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);

    fs.rm(join(process.cwd(), `/src/upload/${catExist.image}`), (error) => {
      if (error) {
        console.log(error);

        throw new HttpException(
          'Error when remove image',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    });

    await this.prismaService.cat.delete({
      where: {
        id: id,
      },
    });

    return 'successfully deleted ';
  }
}
