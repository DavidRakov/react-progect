// import { ReactNode } from "react";
import Home from "./Home";
import TripDetail from "./TripDetail";
import Trips from "./Trips";
import { useTrip } from "./context/TripContext";
import { useUser } from "./context/UserContext";
import UpdateTripForm from "./UpdateTripForm";
import UserRegistration from "./UserRegistration";
import NewTripForm from "./NewTripForm";
import UserLogin from "./UserLogin";
import DelateTrip from "./DeletionTrip";
import ConnectedHome from "./ConnectedHome";
import Connect from "./ConnectMessage";

const Router = () => {
  const { page, id, setWaiting } = useTrip();
  const { user } = useUser();

  if (page === "home") return user ? <ConnectedHome /> : <Home />;
  if (page === "trips") return <Trips />;
  if (page === "tripDetail") return <TripDetail id={id} />;
  if (page === "userRegistration") return <UserRegistration />;
  if (page === "userLogin") return <UserLogin />;
  if (page === "newTripForm") {
    if (user) {
      return <NewTripForm />;
    } else {
      setWaiting(page);
      return <UserLogin />;
    }
  }
  if (page === "updateTripForm") {
    if (user) {
      return <UpdateTripForm />;
    } else {
      setWaiting(page);
      return <UserLogin />;
    }
  }
  if (page === "removeTrip") {
    if (user) {
      return <DelateTrip />;
    } else {
      setWaiting(page);
      return <UserLogin />;
    }
  }
  if (page === "connectMessage") return <Connect />;

  return (
    <div>
      <h1>ERROR 404</h1>
      <h2>PAGE NOT FOUND</h2>
    </div>
  );
};
export default Router;

// type RouteType = {
//     path: string;
//      component: ReactNode
// }
// const Route  = ({ path, component: Component }: RouteType) => {
//     path ? return <Component/> :return  null
// };
