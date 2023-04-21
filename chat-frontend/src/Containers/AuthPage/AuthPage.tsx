import axios from "axios";

const AuthPage = (props: any) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://chatt-app-backend-3jzc.onrender.com/auth", {
        username: value,
      })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">
          Hi There!{" "}
          <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            width="35"
          />
        </div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            className="auth-input"
            placeholder="You can enter Test"
            name="username"
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
