import { UPDATE_SUBSCRIPTION } from "../actions/types";

interface IAction {
  type: string;
  subscription: number;
}

const initialState: ISubscription = {
  plan: {
    duration: 0,
    price: 0,
  },
  storage: 0,
  upfront: false,
};

const subscription = (subscription = initialState, action: IAction) => {
  switch (action.type) {
    case UPDATE_SUBSCRIPTION:
      return action.subscription;

    default:
      return subscription;
  }
};

export default subscription;
