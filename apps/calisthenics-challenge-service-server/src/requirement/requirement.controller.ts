import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequirementService } from "./requirement.service";
import { RequirementControllerBase } from "./base/requirement.controller.base";

@swagger.ApiTags("requirements")
@common.Controller("requirements")
export class RequirementController extends RequirementControllerBase {
  constructor(protected readonly service: RequirementService) {
    super(service);
  }
}
