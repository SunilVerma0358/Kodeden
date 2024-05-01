import React from "react";
import Phone from "../../assets/svg/phoneIcon.svg";
const CommonBtn = () => {
  return (
    <>
      <button className="ff_jost fw_extrabolder text-uppercase white_f4 common_btn d-flex align-items-center gap_10 ">
        <span>
          <img src={Phone} alt="phone" />
        </span>
        Book a Call NOW
      </button>
    </>
  );
};

export default CommonBtn;
