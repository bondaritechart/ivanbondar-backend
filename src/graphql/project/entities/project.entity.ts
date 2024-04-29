import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/graphql/user/entities/user.entity';

@ObjectType()
export class Project {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  imageUrl: string;

  @Field()
  userId: number;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field(() => User)
  user: User;
}
