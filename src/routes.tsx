import { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes as Switch,
} from "react-router-dom";
import { Dispatch } from "redux";
import { login } from "./actions/Actions";
import AuthRoute from "./components/AuthRoute";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import User from "./pages/User";
import IStore from "./store/IStore";
import { IAuthState } from "./types";

const Routes = ({
  auth,
  login,
}: {
  auth: boolean;
  login: (user: string) => void;
}) => {
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const authData: IAuthState = JSON.parse(auth);
      if (authData.auth) {
        login(authData.name);
      }
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/student"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    auth: state.user.auth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: (name: string) => {
      login(name, dispatch);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
