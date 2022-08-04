import { ILogout, ISetData, ISetStudentName, IUserLogin } from "./IActions";

type ActionTypes = IUserLogin | ISetStudentName | ISetData | ILogout;

export default ActionTypes;
