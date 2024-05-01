import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import CommonBtn from "./Common/CommonBtn";
import linkdin from "../assets/svg/linkdin.svg";
import leftArrow from "../assets/svg/LeftArrow.svg";
import rightArrow from "../assets/svg/rightArrow.svg";
import { StudentMap } from "./Common/Helper";
const Student = () => {
  return (
    <div id="faq" className="py-lg-5 position-relative">
      <div className="container py-5 mt-md-4">
        <h2 className="ff_jost fw-semibold fs_4xl lh_lg light_gray mb-0 text-center text-capitalize">
          What our <span className="textBg common_Header">students</span> are
          saying
        </h2>
        <div className="pt-5 mx-auto max_height h-100">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500 }}
            speed={900}
            centeredSlides={true}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            breakpoints={{
              450: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              576: {
                slidesPerView: 1.6,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              992: {
                slidesPerView: 2.4,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {StudentMap.map((props, index) => (
              <SwiperSlide key={index} className="h-100">
                <div className="studentBox">
                  <h3 className="ff_jost fw-normal fs_xl light_gray lh_2xl mb-0">
                    {props.headingThree}
                  </h3>
                  <p className="ff_jost fw-normal fs_sm dark_gray lh_3xl pe-2 pt_5 mb-0">
                    {props.Pharaone}
                  </p>
                  <p className="ff_jost fw-semibold fs_sm light_gray lh_3xl pt_5 mb-0">
                    Read More...
                  </p>
                  <div className="d-flex justify-content-between align-items-center pe-3 pt-4">
                    <div className="d-flex align-items-center gap-2">
                      <div className="max_w_52">
                        <img className="w-100" src={props.src} alt="img" />
                      </div>
                      <div className="ps-1">
                        <p className="ff_jost fw-normal fs_lg mb-0 lh_lg light_gray">
                          {props.pharaTwo}
                        </p>
                        <p className="ff_jost fw-normal fs_xsm mb-0 lh_lg dark_gray">
                          {props.PharaThree}
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://www.linkedin.com/company/radialcode/?originalSubdomain=in"
                      target="blank"
                      className="pe-1"
                    >
                      <img className="w-100" src={linkdin} alt="linkdin" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="prev d-none d-lg-flex">
            <img className="w-25" src={leftArrow} alt="leftArrow" />
          </div>
          <div className="next d-none d-lg-flex">
            <img className="w-25" src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <div className="d-flex justify-content-center pt-4 pt-lg-5 mt-lg-2">
          <CommonBtn />
        </div>
      </div>
    </div>
  );
};

export default Student;
