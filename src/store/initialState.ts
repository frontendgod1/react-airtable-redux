import IStore from "./IStore";

export const initialState: IStore = {
  user: {
    auth: false,
    name: "",
    data: undefined,
  },
};

export default initialState;
