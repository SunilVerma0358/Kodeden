import React from "react";
import star from "../assets/image/star.webp";
import kode from "../assets/image/kodeline.webp";
import whatVector from "../assets/svg/SoftwareEngVector.svg";
import CommonBtn from "./Common/CommonBtn";
const WhoAre = () => {
  return (
    <div id="works" className="pt-lg-5 pb-lg-4 position-relative">
      <span className="Whatvector">
        <img className="w-100" src={whatVector} alt="What We Vector" />
      </span>
      <div className="container py-5 mb-lg-4">
        <h2 className="ff_jost fw-semibold fs_4xl lh_lg light_gray text-center">
          Who Are <span className="textBg common_Header">We</span>?
        </h2>
        <div className="row justify-content-between py-md-5 mt-4">
          <div className="col-12 col-lg-6">
            <div className="position-relative max_w_488 mx-auto ms-xl-0 me-xl-auto ">
              <img className="w-100 imgHover " src={star} alt="star" />
              <img
                className="max_w_113 position-absolute bottom-0 start-0 translate"
                src={kode}
                alt="kode"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-5 pt-lg-0">
            <div className="ps-xl-5">
              {" "}
              <p className="ff_jost fw-normal fs_xsm light_gray mb-0 pt-3">
                MEET YOUR INSTRUCTORS
              </p>
              <h2 className="ff_jost fw-normal fs_4xl light_gray mb-0 pt-1">
                Hi, We’re Kody Doherty{" "}
                <span className="d-xl-block ">and Kolton Starr 👋</span>
              </h2>
              <p className="ff_jost fw-normal fs_sm lh_3xl dark_gray mb-0 pt-3">
                And we know firsthand that building a career as a software
                engineer without a computer science degree is possible.
              </p>
              <p className="ff_jost fw-normal fs_sm lh_3xl dark_gray mb-0">
                {" "}
                We started where you are *right now*—without engineering
                degrees, a professional portfolio, or years of experience.
              </p>
              <p className="ff_jost fw-normal fs_sm lh_3xl dark_gray mb-0">
                Then we climbed the ranks to hold senior positions at tech
                titans like Amazon, Apple, and the US government.
              </p>
              <p className="ff_jost fw-normal fs_sm lh_3xl dark_gray mb-0">
                Throughout our careers, we’ve managed entire teams of engineers,
                directed $30 million program budgets, and built 2 successful
                tech startups (one that we sold).
              </p>
              <p className="ff_jost fw-normal fs_sm lh_3xl dark_gray mb-0">
                Learning to code did more than add a few impressive lines to our
                resumes. It literally changed our lives…
              </p>
              <p className="ff_jost fw-semibold fs_sm textBg common_Header pb-4 pb-lg-5 mb-0 pt-3 ">
                I want to live my dream now!
              </p>
              <CommonBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAre;
