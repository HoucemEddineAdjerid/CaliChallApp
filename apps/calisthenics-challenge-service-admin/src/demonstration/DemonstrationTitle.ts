import { Demonstration as TDemonstration } from "../api/demonstration/Demonstration";

export const DEMONSTRATION_TITLE_FIELD = "id";

export const DemonstrationTitle = (record: TDemonstration): string => {
  return record.id?.toString() || String(record.id);
};
