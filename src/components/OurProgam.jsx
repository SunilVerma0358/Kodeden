import React from "react";
import Ourprogram from "../assets/image/ourProgram.webp";
const OurProgam = () => {
  return (
    <div className="py-lg-5">
      <div className="container py-5 mt-md-4">
        <div className="row align-items-center">
          <div data-aos="zoom-in" className="col-12 col-lg-6">
            <div className="max_w_488 mx-auto ms-xl-0 me-xl-auto overflow-hidden">
              <img
                className="w-100 imgHover"
                src={Ourprogram}
                alt="Ourprogram"
              />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="col-12 col-lg-6 pt-4 pt-sm-5 pt-lg-0"
          >
            <h2 className="ff_jost fw-semibold fs_4xl light_gray mb-0 lh_lg">
              Are You A Good Fit For{" "}
              <span className="d-xl-block">Our Program?</span>
            </h2>
            <p className="ff_jost fw-normal fs_sm light_gray mb-0 pt_10">
              About Who The Program is For
            </p>
            <p className="ff_jost fw-semibold fs_sm textBg common_Header mb-0 pt_20">
              Our 6-Month Software Engeering Course is for individuals that...
            </p>
            <p className="ff_jost fw-normal fs_sm light dark_gray mb-0 pt_10">
              Want to take action now but don't have years to waste in
              university Are extremely motivated and want to succeed Have
              dreamed of becoming a software engineer but don't have hundreds of
              thousands of dollars lying around
            </p>
            <p className="ff_jost fw-semibold fs_sm textBg common_Header mb-0 pt_20">
              It isn't for...
            </p>
            <p className="ff_jost fw-normal fs_sm light dark_gray mb-0 pt_10">
              People that aren't self-starters People that don't have a sense of
              urgency to become a software engineeer People that aren't serious
              about fulfilling their dream
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgam;
