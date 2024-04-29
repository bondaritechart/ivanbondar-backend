import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  title: string;

  @Field()
  userId: number;

  @Field()
  description: string;
}
