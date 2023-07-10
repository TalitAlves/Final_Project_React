import { useForm } from "react-hook-form";
import "../styles/Register.css";
import bgbook from "../img/bg-books.webp";
import { Link } from "react-router-dom";

const Login = ({ loginUser }) => {
  const { register, handleSubmit } = useForm();
  

  const onSubmit = (formData) => {
    loginUser(formData);
  };

  
  return (
    <div style={{ backgroundImage: `url(${bgbook})` }} className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
      <h1>User Login</h1>
        <label htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        <label htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        <div className="button-container">
        <button type="submit">Login</button>
        <button > <Link to="/register">Don't have an account?  Register here.</Link></button>
        </div>
      </form>
     
    </div>
  );
};

export default Login;
