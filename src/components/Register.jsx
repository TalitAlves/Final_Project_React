import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import bgbook from "../img/bg-books.webp";
import { toast } from "react-toastify";
import Form from "./Form";
import db from "../db.json";

const Register = ({ loginUser }) => {
  const navigate = useNavigate();

  const handleFormDataRegister = (formData) => {
    const userfinder = db.users.find((user) => user.email === formData.email);

    if (!userfinder) {
      fetch(`http://localhost:8000/users`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate("/");
          loginUser(data);
          toast.success("Registered sucessfully!");
         
        })
        .catch((error) => {});
    } else {
      toast.warning("User already has an account!");
     
    }
  };
  return (
    <div
      style={{ backgroundImage: `url(${bgbook})` }}
      className="form-container"
    >
      <Form
        handleFormData={handleFormDataRegister}
        title={"Registration"}
        login={false}
      />
    </div>
  );
};

export default Register;
