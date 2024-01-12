import React from "react";

const Toggle = ({ isToggled }) => {
  return (
    <div>
      {isToggled ? (
        <div className="Toggle">
          <a className="nav-link1" href="#">
            Home
          </a>
          <br></br>
          <a className="nav-link2" href="#">
            About
          </a>
          <br></br>
          <a className="nav-link3" href="#">
            Items
          </a>
          <br></br>
        </div>
      ) : null}
    </div>
  );
};

export default Toggle;
