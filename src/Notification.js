import React from "react";

export default function Notification(props) {
  return (
    <div className="Notification">
      <i className="fas fa-exclamation"></i> {props.text}
    </div>
  );
}
