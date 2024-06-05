import { ChallengeParticipation as TChallengeParticipation } from "../api/challengeParticipation/ChallengeParticipation";

export const CHALLENGEPARTICIPATION_TITLE_FIELD = "id";

export const ChallengeParticipationTitle = (
  record: TChallengeParticipation
): string => {
  return record.id?.toString() || String(record.id);
};
