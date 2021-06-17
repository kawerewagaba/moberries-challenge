import { UPDATE_USER } from "../actions/types";

const updateUser = (user: IUser) => ({
  type: UPDATE_USER,
  user,
});

export default updateUser;
