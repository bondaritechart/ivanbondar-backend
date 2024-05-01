import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/graphql/auth/auth.service';
import { SignInInput } from 'src/graphql/auth/dto/signin.input';
import { SignInResponse } from 'src/graphql/auth/dto/signin.response';
import { SignUpResponse } from 'src/graphql/auth/dto/signup.response';
import { CreateUserInput } from 'src/graphql/user/dto/create-user.input';
import { UserService } from 'src/graphql/user/user.service';
import { Public } from './decorators/public.decorator';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @Mutation(() => SignInResponse)
  async signIn(@Args('input') input: SignInInput) {
    const user = await this.authService.validateUser(
      input.email,
      input.password,
    );
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const tokens = await this.authService.signIn(user);
    await this.authService.updateRefreshToken(user.id, tokens.refreshToken);
    return {
      user,
      ...tokens,
    };
  }

  @Public()
  @Mutation(() => SignUpResponse)
  async signUp(@Args('input') input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => Boolean)
  async logout(@Args('id') id: number) {
    return this.authService.logout(id);
  }
}
