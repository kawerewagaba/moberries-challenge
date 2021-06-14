import { UPDATE_STAGE } from "../actions/types";

interface IAction {
  type: string;
  stage: number;
}

const stage = (stage = 0, action: IAction) => {
  switch (action.type) {
    case UPDATE_STAGE:
      return action.stage;

    default:
      return stage;
  }
};

export default stage;
