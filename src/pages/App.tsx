import React from "react";
import { connect } from "react-redux";
import Logout from "../components/Logout";
import IStore from "../store/IStore";

const App = ({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: boolean;
}) => {
  return (
    <>
      {auth && <Logout />}
      <div className="content">{children}</div>
    </>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    auth: state.user.auth,
  };
};

export default connect(mapStateToProps)(App);
