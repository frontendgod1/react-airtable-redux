import { Reducer } from "redux";
import ActionTypeKeys from "../actions/ActionTypeKey";
import ActionTypes from "../actions/ActionTypes";
import { initialState } from "../store/initialState";
import { IUserState } from "../types";

export const userReducer: Reducer<IUserState> = (
  state: IUserState = initialState.user,
  action: ActionTypes
): IUserState => {
  switch (action.type) {
    case ActionTypeKeys.SET_STUDENT_NAME:
      state.name = action.payload.name;
      return { ...state };

    case ActionTypeKeys.SET_DATA:
      if (action.payload.data !== undefined) {
        state.auth = true;
        state.data = action.payload.data;
      }

      return { ...state };

    case ActionTypeKeys.LOG_OUT:
      state.auth = false;
      state.name = "";
      state.data = undefined;
      return { ...state };

    default:
      return state;
  }
};
