import * as graphql from "@nestjs/graphql";
import { DemonstrationResolverBase } from "./base/demonstration.resolver.base";
import { Demonstration } from "./base/Demonstration";
import { DemonstrationService } from "./demonstration.service";

@graphql.Resolver(() => Demonstration)
export class DemonstrationResolver extends DemonstrationResolverBase {
  constructor(protected readonly service: DemonstrationService) {
    super(service);
  }
}
