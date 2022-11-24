import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSantaInput {
  @Field()
  className: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
