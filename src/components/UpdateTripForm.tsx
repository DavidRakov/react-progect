import { useState, useEffect, useRef } from "react";
import { useTrip } from "./context/TripContext";
import { useUser } from "./context/UserContext";
type NewTrip = {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
};

const UpdateTripForm = () => {
  const [newTrip, setNewTrip] = useState<NewTrip | null>(null);
  const [activities, setActivities] = useState<string[]>([]);

  // const [activity, setActivity] = useState("");
  const updateRef = useRef<HTMLInputElement>(null);
  const { setPage, id } = useTrip();
  const { user } = useUser();

  useEffect(() => {
    const fetchTrip = () => {
      fetch(`http://localhost:3000/api/trips/${id}`)
        .then((Trip) => Trip.json())
        .then((trip) => {
          console.log(trip);
          setNewTrip(trip);
          setActivities(trip.activities);
          console.log(activities);
        })
        .catch((error) => console.log(error.message));
    };
    fetchTrip();
  }, []);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewTrip((values) => ({ ...values, [name]: value } as NewTrip));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(newTrip);

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: user as string,
      },
      body: JSON.stringify(newTrip),
    };
    fetch(`http://localhost:3000/api/trips/${id}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setPage("home");
      })
      .catch((err) => console.log(err));
  };

  const newActivity = () => {
    if (updateRef.current)
      setActivities([...activities, updateRef.current.value]);
  };

  if (!newTrip) return <p>no trip</p>;
  return (
    <div id="updateCard">
      <h2>UPDATE TRIP</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">TRIP NAME: </label>
        <input
          type="text"
          name="name"
          value={newTrip.name || ""}
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <label htmlFor="destination">DESTINATION: </label>
        <input
          type="text"
          name="destination"
          value={newTrip.destination || ""}
          onChange={(e) => handleChange(e)}
          required
        />

        <br />
        <label htmlFor="startDate">START DATE: </label>
        <input
          type="date"
          name="startDate"
          value={newTrip.startDate || ""}
          onChange={(e) => handleChange(e)}
          required
        />

        <br />
        <label htmlFor="endDate">END DATE: </label>
        <input
          type="date"
          name="endDate"
          value={newTrip.endDate || ""}
          onChange={(e) => handleChange(e)}
          required
        />

        <br />
        <label htmlFor="description">DESCRIPTION: </label>
        <textarea
          name="description"
          value={newTrip.description || ""}
          onChange={(e) => handleChange(e)}
          required
          style={{ height: "80px" }}
        />

        <br />
        <label htmlFor="price">PRICE: </label>
        <input
          type="number"
          name="price"
          value={newTrip.price || ""}
          onChange={(e) => handleChange(e)}
          required
        />

        <br />
        <label htmlFor="image">IMAGE: </label>
        <input
          type="url"
          name="image"
          value={newTrip.image || ""}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="activities">ACTIVITIES:</label>

        <div id="activities">
          <input type="text" ref={updateRef} />
          <button
            onClick={() => {
              if (updateRef.current) {
                newActivity();
                console.log(activities);
              }
            }}
          >
            insert
          </button>
          <ul>
            {activities.map((act, i) => (
              <li key={i}>
                <label>
                  <input type="checkbox" name="activities" value={act} />
                  {act}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="sendButtons">
          <input type="submit" />
          <input type="reset" />
          <input
            type="button"
            value="חזור לעמוד הראשי"
            onClick={() => setPage("trips")}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateTripForm;
