import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatEntity } from './entities/cat.entity';
import { CreateCatInput } from './dto/create-cat.input';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Mutation(() => CatEntity)
  async createCat(@Args('createCatInput') createCatInput: CreateCatInput) {
    return await this.catsService.create(createCatInput);
  }

  @Query(() => [CatEntity], { name: 'cats' })
  finAll() {
    return this.catsService.findAll();
  }

  @Mutation(() => String)
  removeCat(@Args('id', { type: () => String }) id: string) {
    return this.catsService.remove(id);
  }
}
