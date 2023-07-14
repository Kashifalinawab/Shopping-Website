import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Routing from "./router/Routing";
import "./style.css";

const App = () => {
  return (
    <div>
      <div>Dark Mode </div>
      <NavBar />
      <Routing />
      {/* <div className="footer-div"> */}
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default App;
