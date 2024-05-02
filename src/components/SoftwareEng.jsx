import React from "react";
import Software from "../assets/image/software.webp";
import CommonBtn from "./Common/CommonBtn";
import leftvector from "../assets/svg/SoftwareVector.svg";
const SoftwareEng = () => {
  return (
    <div id="about" className="py-md-4 theme position-relative">
      <span className="left_vector d-none d-sm-block">
        <img className="w-100" src={leftvector} alt="leftvector" />
      </span>
      <div className="container py-5 my-lg-5">
        <div className="row flex-column-reverse flex-lg-row align-items-center">
          <div className=" col-12 col-lg-8 pe-lg-0 pt-4 pt-sm-5 pt-lg-0 max_w_696">
            <h1
              data-aos="zoom-in"
              className="ff_jost fw-medium fs_4xl light_gray lh_xl"
            >
              What is KodeDen's
              <span className="textBg common_Header"> 6-Month</span> Software
              Engineering Course?
            </h1>
            <ul data-aos="zoom-in" className="mb-0 max_w_679">
              <li className="text_dot">
                <a
                  href="#!"
                  className="ff_jost fw-normal fs_sm dark_gray lh_5xl max_w_679"
                >
                  With 6-figure salaries, unlimited PTO, and the flexibility to
                  work anywhere in the world—(or
                </a>
              </li>
              <li className="text_dot">
                <a
                  href="#!"
                  className="ff_jost fw-normal fs_sm dark_gray lh_5xl"
                >
                  simply pick your kids up from school), you want in.
                </a>
              </li>
              <li className="text_dot">
                <a
                  href="#!"
                  className="ff_jost fw-normal fs_sm dark_gray lh_5xl"
                >
                  But who has $25k+ to drop on a bootcamp?
                </a>
              </li>
              <li className="text_dot">
                <a
                  href="#!"
                  className="ff_jost fw-normal fs_sm dark_gray lh_5xl"
                >
                  Or semesters of free time to dedicate to going back to school?
                </a>
              </li>
              <li className="text_dot">
                <a
                  href="#!"
                  className="ff_jost fw-normal fs_sm dark_gray lh_5xl"
                >
                  Or YEARS to go through the trial and error involved in
                  teaching yourself?
                </a>
              </li>
              <li className="text_dot">
                <a
                  href="#!"
                  className="ff_jost fw-normal fs_sm dark_gray lh_5xl"
                >
                  Heck, most people don’t even know where to start.
                </a>
              </li>
              <li className="text_dot max_w_641">
                <a
                  href="#!"
                  className="ff_jost fw-normal fs_sm dark_gray lh_5xl"
                >
                  If that's you, you’ve been dreaming of a high-paying tech
                  career but paralyzed when it{" "}
                  <span className="d-lg-block">comes time to take action.</span>
                </a>
              </li>
            </ul>
            <p className="ff_jost fw-semibold fs_sm text-capitalize textBg common_Header pt-2 mb-0 ">
              I want to Start My Software Engineering Journey!
            </p>
            <div className="pt-4 pt-lg-5">
              <CommonBtn />
            </div>
          </div>
          <div data-aos="zoom-in" className=" col-12 col-lg ps-lg-0">
            <div className="max_w_461 mx-auto overflow-hidden">
              <img className="w-100 imgHover" src={Software} alt="software" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEng;
