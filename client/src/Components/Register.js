import { Container } from "reactstrap";
import { Form,FormGroup,Label,Input,Button } from "reactstrap";
import {Row,Col} from "reactstrap";
import * as yup from "yup";
import { userSchemaValidation} from "../Validations/UserValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {useState } from "react";
import { addUser,deleteUser } from "../Features/UserSlice";
import { Link } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });
const onSubmit = (data) => {
  try{
    const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
  console.log("Form Data", data); 
  alert("Registration is Successful!")
  dispatch(addUser(userData));
  }
catch(error)
{
  console.log("Error");
}
}
const handleDelete=(email)=>
{
  dispatch(deleteUser(email));
}
const userList = useSelector((state) => state.users.value);
const [name, setname] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [confirmPassword, setconfirmPassword] = useState("");

  return (
    <Container>
      <Row className="formrow">
        <Col className="columndiv1" md ={6}>
        <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name..."
                  {...register("name",{ value: name, onChange: (e) =>
                     setname(e.target.value) })} 
                />
                <p className="error">{errors.name?.message}</p>
        </div>
        <div className="form-group">
          <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email..."
                  {...register("email",{ value: name, onChange: (e) =>
                     setemail(e.target.value) })} />
                  <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-group">
           <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password..."
                  {...register("password",{ value: name, onChange: (e) =>
                     setpassword(e.target.value) })} />
                  <p className="error">{errors.password?.message}</p>
          
        </div>
        <div className="form-group">
          <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  placeholder="Confirm your password..."
                  {...register("confirmPassword",{ value: name, onChange: (e) =>
                     setconfirmPassword(e.target.value) })} />  
                  <p className="error">{errors.confirmPassword?.message}</p> 
        </div>
      <div className="form-group">
        <Button color="primary" className="button">
                Register
        </Button>
      </div>
        </form>
        </Col>
      </Row>
    <Row>
      <Col md={6}>
          List of Users
          <table border="1">
            <tbody>
              {userList.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <Button onClick={()=>handleDelete(user.email)}>Delete</Button>
                  </td>
                  <td>
                    <Link to={`/update/${user.email}/${user.name}/${user.password}`}>
                    <Button >Update User</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
    </Row>



    </Container>
  );
};

export default Register;
