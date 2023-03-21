import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export function ListItems({ repos = [] }: { repos: any[] }) {
  console.log(repos);
  return (
    <ListGroup className="w-50">
      {repos.map((repo) => (
        <ListGroup.Item
          key={repo.id}
          className="d-flex justify-content-between align-items-start"
        >
          {repo.name}
          <Badge bg="primary" pill>
            {repo.language}
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
