import "../styles/Register.css";
import bgbook from "../img/bg-books.webp";
import Form from "./Form";

const Login = ({ loginUser }) => {
  const handleFormData = (formData) => {
    loginUser(formData);
    
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgbook})` }}
      className="form-container"
    >
      <Form handleFormData={handleFormData} title={"Login"} login={true} />
    </div>
  );
};

export default Login;
