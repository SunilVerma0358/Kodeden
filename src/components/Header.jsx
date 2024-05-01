import React from "react";
import HeaderImg from "../assets/image/headerImg.webp";
import NavKodeden from "../components/NavKodeden";
import CommonBtn from "./Common/CommonBtn";
import twitter from "../assets/svg/twitter.svg";
import insta from "../assets/svg/insta.svg";
import telgram from "../assets/svg/telgram.svg";
import Linkdin from "../assets/svg/linkdinupper.svg";
import rightVector from "../assets/svg/herovector.svg";
const Header = () => {
  return (
    <div id="home" className="pb-5">
      <div className="theme position-relative hero_bg ">
        <span className="right_vector">
          <img className="w-100" src={rightVector} alt="rightVector" />
        </span>
        <div className="socialmediacard">
          <a
            href="https://twitter.com/radialcode?lang=en"
            target="blank"
            className="Socicon"
          >
            <img src={twitter} alt="img" />
          </a>
          <a
            href="https://www.instagram.com/radialcode/?hl=en"
            target="blank"
            className="Socicon"
          >
            <img src={insta} alt="img" />
          </a>
          <a href="https://telegram.org/" target="blank" className="Socicon">
            <img src={telgram} alt="img" />
          </a>
          <a
            href="https://www.linkedin.com/company/radialcode/?originalSubdomain=in"
            target="blank"
            className="Socicon"
          >
            <img src={Linkdin} alt="img" />
          </a>
        </div>
        <>
          <NavKodeden />
        </>
        <div className="container mt-lg-4 pt-5">
          <h2
            data-aos="zoom-in"
            className="ff_jost fw-semibold text-uppercase fs_3xl white mb-0 text-center pb-1 "
          >
            Start the Mini-Course:
            <span className="textBg common_Header "> Rapidly Learning New</span>
            <span className="textBg common_Header d-lg-block ">
              Technical Skills
            </span>
          </h2>
          <h3 className="ff_jost fw-semibold text-uppercase fs_xl lh_md white mb-0 text-center pt-3">
            Learn All The Skills You Need To Become a
            <span className="d-md-block">Software Engineer!</span>
          </h3>
          <div data-aos="zoom-in" className="max_w_996 mx-auto pt_28 pb-1">
            <img
              className="w-100 min_h_hero object-fit-cover"
              src={HeaderImg}
              alt="HeaderImg"
            />
          </div>
        </div>
      </div>
      <h2 className="ff_jost fw-semibold text-uppercase fs_xl lh_md white mb-0 text-center pt-3">
        Become a <span className="textBg common_Header">Software</span> Engineer
        Now!
      </h2>
      <p className="ff_jost fw-normal fs_sm gray mb-0 text-center pt-3">
        No Math or Science Background Needed
      </p>
      <div className="d-flex justify-content-center pt-4 pt-lg-5">
        <CommonBtn />
      </div>
    </div>
  );
};

export default Header;
