import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChallengeParticipationService } from "./challengeParticipation.service";
import { ChallengeParticipationControllerBase } from "./base/challengeParticipation.controller.base";

@swagger.ApiTags("challengeParticipations")
@common.Controller("challengeParticipations")
export class ChallengeParticipationController extends ChallengeParticipationControllerBase {
  constructor(protected readonly service: ChallengeParticipationService) {
    super(service);
  }
}
