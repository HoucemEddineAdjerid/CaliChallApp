import { Module } from "@nestjs/common";
import { DemonstrationModuleBase } from "./base/demonstration.module.base";
import { DemonstrationService } from "./demonstration.service";
import { DemonstrationController } from "./demonstration.controller";
import { DemonstrationResolver } from "./demonstration.resolver";

@Module({
  imports: [DemonstrationModuleBase],
  controllers: [DemonstrationController],
  providers: [DemonstrationService, DemonstrationResolver],
  exports: [DemonstrationService],
})
export class DemonstrationModule {}
