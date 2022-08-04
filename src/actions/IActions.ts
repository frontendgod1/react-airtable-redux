import { Action } from "redux";
import { ClassData } from "../types";
import keys from "./ActionTypeKey";

export interface IUserLogin extends Action {
  readonly type: keys.LOGIN_USER;
  payload?: {
    user: string;
  };
}

export interface ISetStudentName extends Action {
  readonly type: keys.SET_STUDENT_NAME;
  payload: {
    name: string;
  };
}

export interface ISetData extends Action {
  readonly type: keys.SET_DATA;
  payload: {
    data: ClassData[] | undefined;
    user: string;
  };
}

export interface ILogout extends Action {
  readonly type: keys.LOG_OUT;
}
