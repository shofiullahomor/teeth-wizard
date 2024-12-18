import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;

    handleLogin(email, password).then((res) => {
      navigate(location.this.state.from);
    });
    const googleLoginHandle = () => {
      handleGoogleLogin().then((res) => {
        navigate(location.state.from);
      });
    };
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl text-blue-500 font-extrabold text-center mt-4">
              Login
            </h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary mb-4">
                  Login
                </button>
                <button
                  onClick={googleLoginHandle}
                  className=" btn btn-outline"
                >
                  Login With Google
                </button>
                <p>
                  New? Please
                  <span className="text-green-500  font-bold">
                    <Link to="/register">Register</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
