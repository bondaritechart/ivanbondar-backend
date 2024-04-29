import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';

@Module({
  providers: [ProjectResolver, ProjectService, PrismaService],
})
export class ProjectModule {}
