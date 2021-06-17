import { UPDATE_SUBSCRIPTION } from "../actions/types";

const updateSubscription = (subscription: ISubscription) => ({
  type: UPDATE_SUBSCRIPTION,
  subscription,
});

export default updateSubscription;
