import useRequest from "../../hooks/useRequest";
import Spinner from "react-bootstrap/Spinner";
import { getUserReposByName } from "../../apis/users";
import { ListItems } from "./ListItem";

export default function Repos() {
  const { loading, data } = useRequest(() => {
    return getUserReposByName({ userName: "emile2636" });
  }, []);

  if (loading)
    return (
      <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex">
        <Spinner animation="border" />
      </div>
    );
  return (
    <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex">
      <ListItems repos={data} />
    </div>
  );
}
