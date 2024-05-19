import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnalyticsInput } from './dto/create-analytics.input';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAnalyticsInput: CreateAnalyticsInput) {
    return this.prisma.analytics.create({ data: createAnalyticsInput });
  }

  async findAll() {
    return this.prisma.analytics.findMany();
  }
}
