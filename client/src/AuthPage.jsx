import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const AuthPage = (props) => {
  const onSubmit = (err) => {
    err.preventDefault();
    const { value } = err.target[0];
    axios
      .post("https://chat-app-git-main-joy-ezeanis-projects.vercel.app/authenticate", {
        username: value,
      })
      .then((res) => {
        props.onAuth({ ...res.data, secret: value });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">
          Welcome <span className="icon">👋</span>
        </div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <input
            className="auth-input"
            name="username"
            placeholder="Username"
          />

          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
