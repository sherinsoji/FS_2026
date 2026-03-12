import {Container, Row, Col} from "reactstrap";
import {Form, Input, Button} from "reactstrap"; 
const SharePosts = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Input
          id="post"
          name="post"
          type="textarea"
          />
          <Button>Post IT</Button>
      </Col>
      </Row>
    </Container>
  );
};

export default SharePosts;
