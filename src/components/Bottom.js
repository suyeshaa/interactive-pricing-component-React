import React from "react";
import check from "../assets/icon-check.svg";

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="dissect1">
        <div className="cont">
          <img src={check} alt="" />
          <p>Unlimited websites</p>
        </div>
        <div className="cont">
          <img src={check} alt="" />
          <p>100% data ownership</p>
        </div>
        <div className="cont">
          <img src={check} alt="" />
          <p>Email reports</p>
        </div>
      </div>
      <div className="btm_btn">
        <button>Start my trial</button>
      </div>
    </div>
  );
};

export default Bottom;
