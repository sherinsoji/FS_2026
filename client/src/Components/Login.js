import { Form,FormGroup,Label,Input,Button } from "reactstrap";
import logo from "../Images/logo-t.png";
import {Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
    <img src={logo}></img>
  <Form>
  <FormGroup>
    <Row>
    <Label
      for="Email"
    >
    Email
    </Label>
    </Row>
    <Row>
    <Col sm={3}>
      <Input
        id="Email"
        name="email"
        placeholder="Enter Email"
        type="email"
      />
    </Col>
    </Row>
  </FormGroup>
  <FormGroup>
    <Row>
    <Label
      for="Password"
    >
      Password
    </Label>
    </Row>
    <Row>
    <Col sm={3}>
      <Input
        id="Password"
        name="password"
        placeholder="Enter Password"
        type="password"
      />
    </Col>
    </Row>
  </FormGroup>
  <FormGroup>
    <FormGroup row>
      <Col sm={1}>
      <Button>
        Login
      </Button>
      </Col>
      <Col sm={2}>
      <p className="smalltext">
      No Account? <Link to="/register">Sign Up now.</Link>
      </p>
      </Col>
    </FormGroup>
  </FormGroup>
  </Form>
    </div>
  );
};

export default Login;
