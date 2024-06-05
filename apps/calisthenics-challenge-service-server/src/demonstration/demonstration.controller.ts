import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DemonstrationService } from "./demonstration.service";
import { DemonstrationControllerBase } from "./base/demonstration.controller.base";

@swagger.ApiTags("demonstrations")
@common.Controller("demonstrations")
export class DemonstrationController extends DemonstrationControllerBase {
  constructor(protected readonly service: DemonstrationService) {
    super(service);
  }
}
