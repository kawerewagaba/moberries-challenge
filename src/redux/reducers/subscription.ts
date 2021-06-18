import { UPDATE_SUBSCRIPTION } from "../actions/types";

interface IAction {
  type: string;
  subscription: number;
}

const initialState: ISubscription = {
  plan: {
    duration: 12,
    price: 2,
  },
  storage: 5,
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
