// import { useEffect, useState } from "react";
import { useTrip } from "./context/TripContext";
import { useUser } from "./context/UserContext";

const DelateTrip = () => {
  const { setPage, id } = useTrip();
  const { user } = useUser();

  const deletionConfirmation = () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: user as string,
      },
    };
    fetch(`http://localhost:3000/api/trips/${id}`, requestOptions).then(
      (res) => {
        console.log(res);
        setPage("trips");
      }
    );
  };

  return (
    <div>
      <h2>
        You are about to delete a trip record, <br /> are you sure?
      </h2>

      <div>
        <button onClick={deletionConfirmation}>yes, i am sure</button>
        <button onClick={() => setPage("trips")}>
          No, take me back to the trip list
        </button>
      </div>
    </div>
  );
};

export default DelateTrip;
