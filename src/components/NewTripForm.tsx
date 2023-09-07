import { useState } from "react";
import { useTrip } from "./context/TripContext";
// interface Trip {
//   id: string;
//   name: string;
//   destination: string;
//   startDate: string;
//   endDate: string;
//   description: string;
//   price: number;
//   image: string;
//   activities: string[];
// }

const NewTripForm = () => {
  const [newTrip, setNewTrip] = useState({});
  const { setPage } = useTrip();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewTrip((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "test-token",
      },
      body: JSON.stringify(newTrip),
    };
    fetch("http://localhost:3000/api/trips", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setPage("home");
  };
  return (
    <div id="newCard">
      <h1>NEW TRIP</h1>
      <form onSubmit={handleSubmit}>
        <h2>name</h2>
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          required
        />
        <h2>destination</h2>
        <input
          type="text"
          name="destination"
          onChange={(e) => handleChange(e)}
          required
        />
        <h2>startDate</h2>
        <input
          type="date"
          name="startDate"
          onChange={(e) => handleChange(e)}
          required
        />
        <h2>endDate</h2>
        <input
          type="date"
          name="endDate"
          onChange={(e) => handleChange(e)}
          required
        />
        <h2>description</h2>
        <input
          type="text"
          name="description"
          onChange={(e) => handleChange(e)}
          required
        />
        <h2>price</h2>
        <input
          type="number"
          name="price"
          onChange={(e) => handleChange(e)}
          required
        />
        <h2>image</h2>
        <input
          type="url"
          name="image"
          onChange={(e) => handleChange(e)}
          required
        />
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

export default NewTripForm;
