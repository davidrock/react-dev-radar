import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Form,
  CardColumns,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <aside>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <Row>
                <Col>Register</Col>
              </Row>
            </Card.Title>
            <Card.Text>
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="formGithubUser">
                      <Form.Label>Github User</Form.Label>
                      <Form.Control
                        type="github-user"
                        placeholder="Insert your github's name"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="formTechStack">
                      <Form.Label>Tech Stack</Form.Label>
                      <Form.Control
                        type="tech-stack"
                        placeholder="What technologies do you use?"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="formLat">
                      <Form.Label>Latitude</Form.Label>
                      <Form.Control type="latitude" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formLon">
                      <Form.Label>Longitude</Form.Label>
                      <Form.Control type="longitude" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Text>
            <Card.Link href="#">
              <Button block>Salvar</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </aside>
      <main>
        <CardColumns>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <Image
                    width="60"
                    src="https://avatars1.githubusercontent.com/u/19226926?s=460&u=186d97774a4b53f77c54a2ff8f59b215c805155a&v=4"
                    roundedCircle
                  />
                </Col>
                <Col xs={9} className="user-title">
                  <Row>
                    <Col>
                      <strong>David Rocha de Almeida</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="text-muted">
                        Angular, Vue, React, .NET
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a href="https://github.com/davidrock">
                    Go to Github Profile
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <Image
                    width="60"
                    src="https://avatars1.githubusercontent.com/u/19226926?s=460&u=186d97774a4b53f77c54a2ff8f59b215c805155a&v=4"
                    roundedCircle
                  />
                </Col>
                <Col xs={9} className="user-title">
                  <Row>
                    <Col>
                      <strong>David Rocha de Almeida</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="text-muted">
                        Angular, Vue, React, .NET
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a href="https://github.com/davidrock">
                    Go to Github Profile
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </CardColumns>
      </main>
    </div>
  );
}

export default App;
