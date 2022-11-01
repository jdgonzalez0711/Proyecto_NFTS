import React from "react"; //atajo escribir imr
import { Container , Form , Button } from "react-bootstrap";

export default class login extends React.Component {
  //atajo escribir ccc
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container id= "login-container" style={{ marginTop:200}}>
        <Form>
          <Form.Group>
            <Form.Label style={{float:'left'}}>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese el Correo" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{float:'left'}}>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese la contraseña" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
