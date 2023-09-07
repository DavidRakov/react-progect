import { useTrip } from "./context/TripContext";

const Home = () => {
  const { setPage } = useTrip();
  return (
    <div id="full-page">
      <main>
        <button className="main-buttons" onClick={() => setPage("trips")}>
          ALL THE TRIPS
        </button>
        <button
          className="main-buttons"
          onClick={() => setPage("userRegistration")}
        >
          SIGN UP
        </button>
        <button className="main-buttons" onClick={() => setPage("userLogin")}>
          SIGN IN
        </button>
      </main>
    </div>
  );
};

export default Home;
