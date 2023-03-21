import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import useRequest from "./hooks/useRequest";
import { getUserByName } from "./apis/users";

import Spinner from "react-bootstrap/Spinner";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { loading, data } = useRequest(() => {
    return getUserByName({ userName: "emile2636" });
  }, []);
  if (loading)
    return (
      <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex">
        <Spinner animation="border" />
      </div>
    );

  const onReposClick = () => {
    navigate("/repos");
  };

  const onGistsClick = () => {
    navigate("/gists");
  };

  const created = data?.created_at
    ? new Date(data.created_at).toISOString().split("T")[0]
    : null;
  const repos = data?.public_repos || 0;
  const gists = data?.public_gists || 0;
  return (
    <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data?.avatar_url} />
        <Card.Body>
          <Card.Title>{data?.name}</Card.Title>
          <Card.Text className="text-start">
            My Account created at <Badge bg="primary">{created}</Badge>
            <br></br>I have <Badge bg="warning">{repos}</Badge> repos and &nbsp;
            <Badge bg="info">{gists}</Badge> gists.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex space-between justify-content-around">
          <Button
            variant="primary"
            style={{ fontSize: 12 }}
            onClick={onReposClick}
          >
            List my Repos
          </Button>
          <Button
            variant="primary"
            style={{ fontSize: 12 }}
            onClick={onGistsClick}
          >
            List my Gists
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;
