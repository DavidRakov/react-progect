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

interface Props {
  id: string;
}

const TripDetail = ({ id }: Props) => {
  const [trip, setTrip] = useState<null | Trip>(null);
  const { setPage } = useTrip();

  useEffect(() => {
    const fetchTrip = () => {
      fetch(`http://localhost:3000/api/trips/${id}`)
        .then((Trip) => Trip.json())
        .then((trip) => setTrip(trip))
        .catch((error) => console.log(error.message));
    };
    fetchTrip();
  }, []);

  if (!trip) return <p>no trip</p>;

  return (
    <div id="oneTrip">
      <h2>name</h2>
      <p className="details">{trip.name}</p>
      <h2>destination</h2>
      <p className="details">{trip.destination}</p>
      <h2>start date</h2>
      <p className="details">{trip.startDate}</p>
      <h2>end date</h2>
      <p className="details">{trip.endDate}</p>

      <p>
        <img src={trip.image} alt="" width={350} />
      </p>
      <h2>description</h2>
      <p className="details">{trip.description}</p>
      <h2>price</h2>
      <p className="details">ONLY: ${trip.price}</p>
      <h2>activities</h2>
      <div
        className="details"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {trip.activities &&
          trip.activities.map((item, i) => <li key={i}>{item}</li>)}
      </div>
      <button onClick={() => setPage("updateTripForm")} id="updateButton">
        update trip
      </button>
    </div>
  );
};
export default TripDetail;
