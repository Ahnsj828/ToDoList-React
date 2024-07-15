import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>To Do List</h1>
      <h1>
        {" "}
        <span>📅</span> {new Date().toDateString()}
      </h1>
    </div>
  );
};

export default React.memo(Header);
