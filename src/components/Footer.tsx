import { useState } from "react";

const Footer = () => {
  const Time = new Date();
  const [time, setTime] = useState(
    `${Time.toLocaleTimeString()}  ${Time.toLocaleDateString()}`
  );

  setTimeout(() => {
    const Time = new Date();
    setTime(`${Time.toLocaleTimeString()}  ${Time.toLocaleDateString()}`);
  }, 1000);
  return (
    <footer>
      <p>CREATED BY D.R.</p>
      <p>{time}</p>
    </footer>
  );
};
export default Footer;
