import React from "react";

const Footer = () => {
  return (
    <div className="py-4 py-md-5  borderB ">
      <div className="container d-flex flex-wrap justify-content-center justify-content-sm-end align-items-center gap-1 my-lg-3">
        <a
          href="#!"
          className="ff_jost fw-normal fs_lg lh_sm white opacity-75 pt-2 pt-sm-0"
        >
          Privacy Policy |
        </a>
        <a
          href="#!"
          className="ff_jost fw-normal fs_lg lh_sm white opacity-75 pt-2 pt-sm-0"
        >
          Terms of Service |
        </a>
        <a
          href="#!"
          className="ff_jost fw-normal fs_lg lh_sm white opacity-75 pt-2 pt-sm-0"
        >
          Cookie Policy{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
