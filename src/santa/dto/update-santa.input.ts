import { CreateSantaInput } from './create-santa.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReviewInput extends PartialType(CreateSantaInput) {
  @Field(() => Int)
  id: number;
}
