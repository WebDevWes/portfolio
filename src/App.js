import React from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import WindowContainer from "./components/WindowContainer";
import { Rnd } from "react-rnd";

function App() {
  return (
    <div
      style={{ backgroundColor: "#66a", minHeight: "100vh", height: "100%" }}
    >
      <Navbar />
      <Rnd>
        <WindowContainer />
      </Rnd>
      <Footer />
    </div>
  );
}

export default App;
