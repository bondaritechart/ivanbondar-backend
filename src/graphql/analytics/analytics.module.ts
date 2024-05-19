import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnalyticsService } from './analytics.service';
import { AnalyticsResolver } from './analytics.resolver';

@Module({
  providers: [AnalyticsResolver, AnalyticsService, PrismaService],
})
export class AnalyticsModule {}
