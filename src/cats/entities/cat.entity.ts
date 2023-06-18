import { ObjectType, Field } from '@nestjs/graphql';
import { v4 as uuid_v4 } from 'uuid';

interface CatEntityProps {
  name: string;
  breed: string;
  image: string;
}

@ObjectType()
export class CatEntity {
  @Field()
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  breed: string;

  @Field(() => String)
  image: string;

  @Field(() => Date)
  created_at: Date;

  constructor({ name, breed, image }: CatEntityProps) {
    this.id = uuid_v4();
    this.name = name;
    this.breed = breed;
    this.image = image;
    this.created_at = new Date();
  }
}
