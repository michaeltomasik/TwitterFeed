import React from "react";
import "./index.css";

const TwitterModuleRow = ({ image, username, name, text }) => (
  <div className="TwitterModuleRow">
    <div>
      <img
        className="TwitterModuleRow__userAvatar"
        alt="twitter-avatar"
        src={image}
      />
    </div>
    <div className="TwitterModuleRow__commentSection">
      <div>
        <span className="TwitterModuleRow__name">{`${name} `}</span>
        <span className="TwitterModuleRow__username">@{username}</span>
      </div>
      <div className="TwitterModuleRow__text">{text}</div>
    </div>
  </div>
);

export default TwitterModuleRow;
