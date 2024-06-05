import { Requirement as TRequirement } from "../api/requirement/Requirement";

export const REQUIREMENT_TITLE_FIELD = "id";

export const RequirementTitle = (record: TRequirement): string => {
  return record.id?.toString() || String(record.id);
};
