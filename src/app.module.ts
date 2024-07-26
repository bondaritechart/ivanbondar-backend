import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from 'src/graphql/auth/auth.module';
import { AccessTokenGuard } from 'src/graphql/auth/guards/accessToken.guard';
import { AccessTokenStrategy } from 'src/graphql/auth/stragegies/accessToken.strategy';
import { ProfileModule } from 'src/graphql/profile/profile.module';
import { ProjectModule } from 'src/graphql/project/project.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from 'src/rest/auth/auth.controller';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './graphql/user/user.module';
import { AnalyticsService } from './graphql/analytics/analytics.service';
import { AnalyticsModule } from './graphql/analytics/analytics.module';

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
    AnalyticsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [
    AccessTokenStrategy,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
    AnalyticsService,
  ],
})
export class AppModule {}
