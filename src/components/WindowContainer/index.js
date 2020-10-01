import React from 'react';
import { Rnd } from "react-rnd";
import "./style.css";

export default function WindowContainer(props) {
  return (
    <Rnd className="WindowContainer">
      <div className="TitleBar">{props.name}</div>
    </Rnd>
  )
}

