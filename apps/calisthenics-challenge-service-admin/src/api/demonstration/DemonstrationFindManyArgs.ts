import { DemonstrationWhereInput } from "./DemonstrationWhereInput";
import { DemonstrationOrderByInput } from "./DemonstrationOrderByInput";

export type DemonstrationFindManyArgs = {
  where?: DemonstrationWhereInput;
  orderBy?: Array<DemonstrationOrderByInput>;
  skip?: number;
  take?: number;
};
