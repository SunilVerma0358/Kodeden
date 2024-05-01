import React from "react";
import CommonBtn from "./Common/CommonBtn";
import dog from "../assets/image/kodeden.webp";
import vetorOur from "../assets/svg/SoftwareVector.svg";
const OurGuarantee = () => {
  return (
    <div className="py-lg-5 position-relative">
      <span className="OurGuaranteeVector">
        <img className="w-100" src={vetorOur} alt="ourVector" />
      </span>
      <div className="container py-5">
        {" "}
        <div className="row flex-column-reverse flex-md-row align-items-center">
          <div className="col-12 col-md-7 pt-4 pt-sm-5 pt-md-0">
            <h2 className="ff_jost fw_semibold fs_4xl light_gray mb-0">
              Our Guarantee
            </h2>
            <p className="ff_jost fw-normal fs_xl gray mb-0 pt-2">
              If you decide coding isn’t right for you within 15 days of
              starting the program, we’ll give you your money back.
            </p>
            <p className="ff_jost fw-semibold fs_sm textBg common_Header pt-3 pb-4 pb-lg-5 mb-0">
              I want to become a software engineer in 6 months!
            </p>
            <CommonBtn />
          </div>
          <div className="col-12 col-md-5">
            <div className="max_w_386 mx-auto">
              <img className="w-100" src={dog} alt="dog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGuarantee;
