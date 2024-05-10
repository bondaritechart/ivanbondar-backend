import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthResolver } from 'src/graphql/auth/auth.resolver';
import { AccessTokenStrategy } from 'src/graphql/auth/stragegies/accessToken.strategy';
import { RefreshTokenStrategy } from 'src/graphql/auth/stragegies/refreshToken.strategy';
import { UserService } from 'src/graphql/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    PrismaService,
    JwtService,
    UserService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
