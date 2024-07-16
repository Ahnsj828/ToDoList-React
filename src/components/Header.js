import React from "react";
import "./Header.css";
import styled from "styled-components";

// const Btn = styled.button`
//   color: #f00f00;
// `;

const Header = () => {
  return (
    <div className="Header">
      {/* <Btn>Hi</Btn> */}
      <h1>To Do List</h1>
      <h1>
        <span>📅</span> {new Date().toDateString()}{" "}
      </h1>
    </div>
  );
};

export default React.memo(Header);
