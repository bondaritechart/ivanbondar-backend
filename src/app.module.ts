import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from 'src/graphql/auth/auth.module';
import { AccessTokenGuard } from 'src/graphql/auth/guards/accessToken.guards';
import { AccessTokenStrategy } from 'src/graphql/auth/stragegies/accessToken.strategy';
import { ProfileModule } from 'src/graphql/profile/profile.module';
import { ProjectModule } from 'src/graphql/project/project.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './graphql/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ProjectModule,
    UserModule,
    ProfileModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [
    AccessTokenStrategy,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
