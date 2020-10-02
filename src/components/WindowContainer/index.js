import React from "react";
import { Rnd } from "react-rnd";
import "./style.css";

export default function WindowContainer(props) {
  const handleDelete = () => {
    console.log("Delete Button");
  };

  return (
    <Rnd className="WindowContainer" dragHandleClassName="TitleBar">
      <div className="TitleBar">
        <button type="button" className="DeleteButton" onClick={handleDelete} />
        {props.name}
      </div>
      {props.children}
    </Rnd>
  );
}
