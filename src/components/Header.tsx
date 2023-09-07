import { useTrip } from "./context/TripContext";
import { AiFillHome } from "react-icons/ai";

const Header = () => {
  const { setPage } = useTrip();
  return (
    <header>
      <div style={{ fontSize: "x-large", fontWeight: "600" }}>
        Travel management website
      </div>
      <div>
        <button onClick={() => setPage("home")}>
          <AiFillHome />
        </button>
      </div>
    </header>
  );
};

export default Header;
