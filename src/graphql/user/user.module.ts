import { Module } from '@nestjs/common';
import { AuthService } from 'src/graphql/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/graphql/user/user.service';
import { UserResolver } from 'src/graphql/user/user.resolver';

@Module({
  providers: [UserService, PrismaService, AuthService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
