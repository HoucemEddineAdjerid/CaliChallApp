/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Requirement as PrismaRequirement } from "@prisma/client";

export class RequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RequirementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.requirement.count(args);
  }

  async requirements<T extends Prisma.RequirementFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequirementFindManyArgs>
  ): Promise<PrismaRequirement[]> {
    return this.prisma.requirement.findMany<Prisma.RequirementFindManyArgs>(
      args
    );
  }
  async requirement<T extends Prisma.RequirementFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequirementFindUniqueArgs>
  ): Promise<PrismaRequirement | null> {
    return this.prisma.requirement.findUnique(args);
  }
  async createRequirement<T extends Prisma.RequirementCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequirementCreateArgs>
  ): Promise<PrismaRequirement> {
    return this.prisma.requirement.create<T>(args);
  }
  async updateRequirement<T extends Prisma.RequirementUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequirementUpdateArgs>
  ): Promise<PrismaRequirement> {
    return this.prisma.requirement.update<T>(args);
  }
  async deleteRequirement<T extends Prisma.RequirementDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequirementDeleteArgs>
  ): Promise<PrismaRequirement> {
    return this.prisma.requirement.delete(args);
  }
}
