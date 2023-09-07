import { useEffect, useState } from "react";
import { useTrip } from "./context/TripContext";
interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
}

const Trips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const { setPage, setID } = useTrip();

  const openCard = (id: string) => {
    setID(id);
    setPage("tripDetail");
  };

  const removeTrip = (id: string) => {
    setID(id);
    setPage("removeTrip");
  };

  useEffect(() => {
    const fetchTrips = () => {
      fetch(`http://localhost:3000/api/trips`)
        .then((Trips) => Trips.json())
        .then((trips) => setTrips(trips))
        .catch((error) => console.log(error.message));
    };
    fetchTrips();
  }, []);

  return (
    <div>
      <button onClick={() => setPage("newTripForm")} className="addButton">
        add trip
      </button>
      <div id="allCards">
        {trips.map((trip) => (
          <div key={trip.id} className="tripCards" id={trip.id}>
            <p style={{ fontSize: "xx-large", textDecoration: "underline" }}>
              {trip.name}
            </p>
            <p>{trip.destination}</p>
            <p>start at {`{${trip.startDate}}`}</p>
            <p>end at {`{${trip.endDate}}`}</p>
            <img src={trip.image} alt="" width={250} height={180} />
            <div>
              <button onClick={() => openCard(trip.id)}>for mor details</button>
              <button onClick={() => removeTrip(trip.id)}>delate trip</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
