import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/graphql/user/entities/user.entity';

@ObjectType()
export class Profile {
  @Field()
  id: number;

  @Field()
  bio: string;

  @Field()
  userId: number;

  @Field(() => User)
  user: User;

  @Field({ nullable: true })
  imageUrl: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
