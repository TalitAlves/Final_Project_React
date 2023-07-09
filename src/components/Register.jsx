import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import axios from "axios";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  
  const onSubmit = (formData) => {
   fetch(`http://localhost:8000/users`,{
    method:"POST",
    headers:{"content-type": "application.json"},
    body:JSON.stringify(formData)
   }).then((response)=>{
        console.log(response)
   }).catch((error)=>{
        console.log(error)
   })

   
    
    
    navigate("/login")

    // console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        {...register("email", { required: true })}
      />
      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        id='password'
        {...register("password", { required: true })}
      />
      <button type='submit'>Registrate</button>
    </form>
  );
};

export default Register;
