import { createStore, Store } from "redux";
import rootReducer from "../reducers/RootReducer";
import IStore from "./IStore";
import initialState from "./initialState";

export default function configureStore(
  initialStateValue: IStore = initialState
): Store<IStore> {
  return createStore(rootReducer, initialStateValue!);
}
