import { connect } from "react-redux";
import { Dispatch } from "redux";
import { logout } from "../actions/Actions";

const Logout = ({ logout }: { logout: () => void }) => {
  return (
    <div className="logout">
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Logout);
