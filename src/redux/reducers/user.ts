import { UPDATE_USER } from "../actions/types";

interface IAction {
  type: string;
  user: number;
}

const initialState: IUser = {
  email: "",
  consent: false,
  card: {
    number: "",
    expiry: {
      month: "",
      year: "",
    },
    code: "",
  },
};

const user = (user = initialState, action: IAction) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.user;

    default:
      return user;
  }
};

export default user;
