import TripProvider from "./components/context/TripContext";
import Router from "./components/Router";
import "./App.css";
import Header from "./components/Header";
import UserProvider from "./components/context/UserContext";
import Footer from "./components/Footer";
import { useState } from "react";
// import Header from "./components/Header";

function App() {
  const [background, setBackground] = useState(
    "https://images.squarespace-cdn.com/content/v1/5a7c0544d74cffa3a6ce66b3/1630183781197-HDM6VZNPNANFZIYPJUI5/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA+%D7%A0%D7%95%D7%A3+-+%D7%A9%D7%95%D7%95%D7%99%D7%A5.jpg"
  );

  return (
    <TripProvider>
      <UserProvider>
        <Header />
        <div
          id="main"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <Router />
        </div>
        <Footer />
      </UserProvider>
    </TripProvider>
  );
}

export default App;
