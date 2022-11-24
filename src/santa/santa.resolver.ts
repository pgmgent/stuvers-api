import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSantaInput } from './dto/create-santa.input';
import { Santa } from './entities/santa.entity';
import { SantaService } from './santa.service';

@Resolver(() => Santa)
export class SantaResolver {
  constructor(private readonly santaService: SantaService) {}

  @Mutation(() => Santa)
  createSanta(@Args('createSantaInput') createSantaInput: CreateSantaInput) {
    return this.santaService.create(createSantaInput);
  }

  @Query(() => [Santa], { name: 'santas' })
  findAll() {
    return this.santaService.findAll();
  }
}
