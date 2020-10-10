import React from "react";
import Image from "../assets/github-cards.png";
import Form from "../components/Form";

function Header({onSearchInputChange, getUser}) {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src={Image} width="100px" height="100px" alt="logo" />
          <Form onSearchInputChange={onSearchInputChange} getUser={getUser}></Form>
        </div>
      </header>
    </div>
  );
}

export default Header;
