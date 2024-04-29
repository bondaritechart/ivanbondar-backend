import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/graphql/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from 'src/graphql/user/dto/create-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
  ) {}

  async createUser(input: CreateUserInput) {
    const candidate = await this.findOneByEmail(input.email);

    if (candidate) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(input.password, 10);

    const user = await this.prismaService.user.create({
      data: {
        name: input.name,
        email: input.email,
        hashedPassword,
      },
    });

    const { refreshToken, accessToken } =
      await this.authService.createTokens(user);

    await this.authService.updateRefreshToken(user.id, refreshToken);
    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async findOneByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findOneById(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
      include: {
        projects: true,
        profile: true,
      },
    });
  }

  async findAllUsers() {
    return this.prismaService.user.findMany({
      include: {
        projects: true,
        profile: true,
      },
    });
  }
}
