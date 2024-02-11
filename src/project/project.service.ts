import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  async create(createProjectInput: CreateProjectInput) {
    return this.prisma.project.create({ data: createProjectInput });
  }

  async findAll() {
    return this.prisma.project.findMany();
  }

  async findOne(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  update(id: number, updateProjectInput: UpdateProjectInput) {
    return this.prisma.project.update({
      where: { id },
      data: updateProjectInput,
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({ where: { id } });
  }
}
