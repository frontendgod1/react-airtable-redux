import { connect } from "react-redux";
import { Dispatch } from "redux";
import { login, setStudentName } from "../actions/Actions";
import IStore from "../store/IStore";

interface Props {
  name: string;
  auth: boolean;
  setUserName: (name: string) => void;
  login: (name: string) => void;
}

const Login = ({ auth, name, setUserName, login }: Props) => {
  return (
    <>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          login(name);
        }}
      >
        <div>
          <label htmlFor="student">Student Name: </label>
        </div>
        <div className="form-action">
          <div>
            <input
              type="text"
              name="student"
              id="student"
              onChange={(e) => setUserName(e.target.value)}
              value={name}
            />
          </div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    auth: state.user.auth,
    name: state.user.name,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserName: (name: string) => {
      dispatch(setStudentName(name));
    },
    login: (name: string) => {
      login(name, dispatch);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
