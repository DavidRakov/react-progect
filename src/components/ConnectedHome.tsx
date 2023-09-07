import { useTrip } from "./context/TripContext";
import { useUser } from "./context/UserContext";

const ConnectedHome = () => {
  const { setPage } = useTrip();
  const {setUser} = useUser()

  const signOut = () => {
    const yes = confirm("Are you sure you want to log out?")
    if (yes) {setUser(null)
      setPage("home")
    }else{
      setPage("home")
    }
  }
  return (
    <div id="full-page">
      <main>
        <button className="main-buttons" onClick={() => setPage("trips")}>
          ALL THE TRIPS
        </button>
        <button
          className="main-buttons"
          onClick={signOut}
        >
          SIGN OUT
        </button>
      </main>
    </div>
  );
};

export default ConnectedHome;
