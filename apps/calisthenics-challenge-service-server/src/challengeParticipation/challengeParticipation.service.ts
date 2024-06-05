import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChallengeParticipationServiceBase } from "./base/challengeParticipation.service.base";

@Injectable()
export class ChallengeParticipationService extends ChallengeParticipationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
