import { useState } from "react";
import { useTrip } from "./context/TripContext";
import { useUser } from "./context/UserContext";

const UserLogin = () => {
  const [admin, setAdmin] = useState({});
  const { setPage } = useTrip();
  const { setUser } = useUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setAdmin((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(admin);

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(admin),
    };
    fetch(`http://localhost:3000/api/auth/login`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "Login successful") {
          setUser(res.responseObj.token);
          setPage("connectMessage");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>LOG IN!!</h1>
      <form onSubmit={handleSubmit}>
        <h3>הכנס את כתובת המייל שלך</h3>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => handleChange(e)}
          required
        />
        <h3>הכנס את הסיסמה</h3>
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={(e) => handleChange(e)}
        />
        <div className="sendButtons">
          <input type="submit" />
        </div>
      </form>
      <div dir="rtl">
        עדיין אין לך חשבון?
        <button onClick={() => setPage("userRegistration")}>לרישום</button>
      </div>
    </div>
  );
};

export default UserLogin;
