import React from "react";
import { Link } from "react-router-dom";
import CancelButton from "./CancelButton";
import MassDeleteButton from "./MassDeleteButton";
import { useState } from "react";

const Header = ({
  text,
  buttontext1,
  buttontype,
  form,
  onClick,
  secondBtn,
}) => {
  return (
    <div>
      <div className="header">
        <div className="header-wrap">
          <p className="header-text">{text}</p>
          <div className="buttons">
            <Link
              to="/add-product"
              className="add-btn"
              onClick={onClick}
              form={form}
              type={buttontype}
            >
              {buttontext1}
            </Link>
            {buttontext1 === "ADD" ? <MassDeleteButton /> : <CancelButton />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
