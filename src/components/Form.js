import { useForm } from "react-hook-form";
import Button from "./Button";
import { Link } from "react-router-dom";


function Form({ onSubmit, title, login }) {
  const { register, handleSubmit } = useForm();
      

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
      <h1>{title}</h1>
      {login === false && (
        <>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
          />
        </>
      )}
      <label htmlFor="email" className="registerLabel">
        Email:
      </label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />
      <div className="button-container">
        <Button onClick={onSubmit} message={login ? "Login" : "Register"} />
        { login && <Link to="/register">
          <Button
            message={"Don't have an account? Register here."}
            style={{ width: "100%" }}
          />
        </Link>}
        {login=== false && 
        <Link to="/login" style={{ width: "100%" }}>
          <Button
            message={"Already have an account? Login here."}
            style={{ width: "100%" }}
          />
        </Link>
        }
      </div>
    </form>
  );
}

export default Form;
