import * as graphql from "@nestjs/graphql";
import { RequirementResolverBase } from "./base/requirement.resolver.base";
import { Requirement } from "./base/Requirement";
import { RequirementService } from "./requirement.service";

@graphql.Resolver(() => Requirement)
export class RequirementResolver extends RequirementResolverBase {
  constructor(protected readonly service: RequirementService) {
    super(service);
  }
}
