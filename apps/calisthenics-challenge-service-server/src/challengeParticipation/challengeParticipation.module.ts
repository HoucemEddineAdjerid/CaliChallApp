import { Module } from "@nestjs/common";
import { ChallengeParticipationModuleBase } from "./base/challengeParticipation.module.base";
import { ChallengeParticipationService } from "./challengeParticipation.service";
import { ChallengeParticipationController } from "./challengeParticipation.controller";
import { ChallengeParticipationResolver } from "./challengeParticipation.resolver";

@Module({
  imports: [ChallengeParticipationModuleBase],
  controllers: [ChallengeParticipationController],
  providers: [ChallengeParticipationService, ChallengeParticipationResolver],
  exports: [ChallengeParticipationService],
})
export class ChallengeParticipationModule {}
