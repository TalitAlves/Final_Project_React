import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import bgbook from "../img/bg-books.webp";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "./Button";

const Register = ({loginUser}) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      loginUser(data);
      navigate("/");
      toast.success("Registered sucessfully!")
    })
    .catch((error) => {
      
      
    });

   
  };
  return (
    <div style={{ backgroundImage: `url(${bgbook})` }} className="form-container">
    <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
    <h1>User Registration </h1>
     <label htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        <label htmlFor="lastName">
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", { required: true })}
        />
        <label htmlFor="email" className="registerLabel">
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
        <button type="submit">Register</button>
         <Link to="/login" style={{width:"100%"}}> <Button message={"Already have an account? Login here."}/></Link>
        </div>
      </form>
     
    </div>
  );
};

export default Register;
