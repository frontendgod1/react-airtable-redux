import keys from "./ActionTypeKey";
import * as IActions from "./IActions";
import { login as studentLogin } from "../api";
import { ClassData } from "../types";
import { Dispatch } from "redux";

export const login = (user: string, dispatch: Dispatch) => {
  studentLogin(user).then((res) => {
    if (res) {
      localStorage.setItem("auth", JSON.stringify({ auth: true, name: user }));
    }
    return dispatch(setData(res, user));
  });
};

export const setStudentName = (name: string): IActions.ISetStudentName => {
  return {
    type: keys.SET_STUDENT_NAME,
    payload: { name },
  };
};

export const setData = (
  data: ClassData[] | undefined,
  user: string
): IActions.ISetData => {
  return {
    type: keys.SET_DATA,
    payload: { data, user },
  };
};

export const logout = (): IActions.ILogout => {
  localStorage.removeItem("auth");
  return {
    type: keys.LOG_OUT,
  };
};
