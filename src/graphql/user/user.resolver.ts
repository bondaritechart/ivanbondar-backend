import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/graphql/user/entities/user.entity';
import { UserService } from 'src/graphql/user/user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAllUsers();
  }

  @Query(() => User)
  async user(@Args('id') id: number) {
    return this.userService.findOneById(id);
  }
}
