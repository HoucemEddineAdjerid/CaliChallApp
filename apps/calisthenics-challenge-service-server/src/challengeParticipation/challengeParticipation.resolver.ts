import * as graphql from "@nestjs/graphql";
import { ChallengeParticipationResolverBase } from "./base/challengeParticipation.resolver.base";
import { ChallengeParticipation } from "./base/ChallengeParticipation";
import { ChallengeParticipationService } from "./challengeParticipation.service";

@graphql.Resolver(() => ChallengeParticipation)
export class ChallengeParticipationResolver extends ChallengeParticipationResolverBase {
  constructor(protected readonly service: ChallengeParticipationService) {
    super(service);
  }
}
