import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileBody from "../components/ProfileBody";
import SimpleFooter from "../components/SimpleFooter";

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: "#ac9ecc" }}>
      <Sidebar />
      <ProfileBody />
      <SimpleFooter />
    </div>
  );
}
