import { UPDATE_STAGE } from "../actions/types";

const updateStage = (stage: number) => ({
  type: UPDATE_STAGE,
  stage,
});

export default updateStage;
