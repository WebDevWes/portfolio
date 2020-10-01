import React from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import WindowContainer from "./components/WindowContainer";

function App() {
  return (
    <div
      style={{ backgroundColor: "#66a", minHeight: "100vh", height: "100%" }}
    >
      <Navbar />
      <WindowContainer />
      <Footer />
    </div>
  );
}

export default App;
