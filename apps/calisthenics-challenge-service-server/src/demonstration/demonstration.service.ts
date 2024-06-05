import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DemonstrationServiceBase } from "./base/demonstration.service.base";

@Injectable()
export class DemonstrationService extends DemonstrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
