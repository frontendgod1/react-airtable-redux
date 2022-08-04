import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import IStore from "../store/IStore";

const PrivateRoute = ({
  auth,
  children,
}: {
  auth: boolean;
  children: React.ReactNode;
}) => {
  if (!auth) return <Navigate to="/login" replace />;

  return <>{children}</>;
};

const mapStateToProps = (state: IStore) => {
  return {
    auth: state.user.auth,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
