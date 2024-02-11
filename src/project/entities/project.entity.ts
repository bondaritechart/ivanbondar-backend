import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field()
  id: number;

  @Field()
  title: string;
}
