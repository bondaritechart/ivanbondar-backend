import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Profile } from 'src/graphql/profile/entities/profile.entity';
import { Project } from 'src/graphql/project/entities/project.entity';

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  hashedPassword: string;

  @Field({ nullable: true })
  hashedRefreshToken?: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field(() => [Project], { nullable: 'itemsAndList' })
  projects: Project[];

  @Field(() => Profile, { nullable: true })
  profile: Profile;

  @Field(() => Role)
  role: Role;
}

export enum Role {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User roles',
});
