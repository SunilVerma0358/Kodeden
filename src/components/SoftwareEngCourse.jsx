import React from "react";
import arrow from "../assets/svg/Arrow.svg";
import vecter from "../assets/svg/SoftwareEngVector.svg";
import { SoftwareEngMap } from "./Common/Helper";
const SoftwareEngCourse = () => {
  return (
    <div id="program" className="py-5 position-relative">
      <span className="SoftwareEngv">
        <img className="w-100" src={vecter} alt="vector" />
      </span>
      <div className="container py-lg-5">
        <h2 className="ff_jost fw-medium fs_4xl light_gray lh_xl text-center">
          <span className="d-lg-block">
            “From Confused to Coder”: Kodeden's
          </span>{" "}
          Exclusive 6-Month
          <span className="textBg common_Header">
            {" "}
            Software Engineering
          </span>{" "}
          Course
        </h2>
        <h3 className="ff_jost fw-normal fs_sm light_gray text-center pt-2 mb-0">
          Through twice-weekly live lectures and at-home exercises, you’ll:
        </h3>
        <p className="ff_jost fw-normal fs_sm dark_gray text-center pt-3 mb-0 ">
          Learn everything you need to know to break into tech from senior
          engineers with experience at
          <span className="d-lg-block">Apple, Amazon, and the DOD.</span>
        </p>
        <div className="pt-5 max_w_960 mx-auto d-flex flex-wrap justify-content-center justify-content-lg-between ">
          {SoftwareEngMap.map((props, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="box col-12 col-sm-6 col-lg-4 mt-lg-4 mx-2 mt-4 position-relative d-flex flex-column justify-content-end"
            >
              <div
                className={`${props.classname} max_w_132 imgPosition position-absolute z-2 book`}
              >
                <img className="w-100" src={props.src} alt="master" />
              </div>
              <div
                className={`${props.classname} max_w_132 imgPosition position-absolute blur book`}
              >
                <img className="w-100" src={props.src} alt="master" />
              </div>

              <h4 className="ff_jost fw-semibold fs_2xl dark_gray mb-0 d-inline">
                {props.number}
              </h4>

              <a
                href="#!"
                className="ff_jost fw-bold fs_md light_gray lh_ mb-0 pe-lg-5 pt_5 "
              >
                <span className="d-block">{props.phara}</span>
                <span> {props.pharaone} </span>
                <span className="w-100 arrowHover">
                  <img src={arrow} alt="Arrow" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngCourse;
