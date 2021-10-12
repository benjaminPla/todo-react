import React from "react";
import "./Notification.css";

export default function Notification(props) {
  return (
    <div className="Notification" >
      <i className="fas fa-exclamation"></i> {props.text}
    </div>
  );
}
