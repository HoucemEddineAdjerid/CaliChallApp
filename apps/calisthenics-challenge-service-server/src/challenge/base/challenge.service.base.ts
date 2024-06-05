/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Challenge as PrismaChallenge } from "@prisma/client";

export class ChallengeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ChallengeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.challenge.count(args);
  }

  async challenges<T extends Prisma.ChallengeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChallengeFindManyArgs>
  ): Promise<PrismaChallenge[]> {
    return this.prisma.challenge.findMany<Prisma.ChallengeFindManyArgs>(args);
  }
  async challenge<T extends Prisma.ChallengeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChallengeFindUniqueArgs>
  ): Promise<PrismaChallenge | null> {
    return this.prisma.challenge.findUnique(args);
  }
  async createChallenge<T extends Prisma.ChallengeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChallengeCreateArgs>
  ): Promise<PrismaChallenge> {
    return this.prisma.challenge.create<T>(args);
  }
  async updateChallenge<T extends Prisma.ChallengeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChallengeUpdateArgs>
  ): Promise<PrismaChallenge> {
    return this.prisma.challenge.update<T>(args);
  }
  async deleteChallenge<T extends Prisma.ChallengeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChallengeDeleteArgs>
  ): Promise<PrismaChallenge> {
    return this.prisma.challenge.delete(args);
  }
}
