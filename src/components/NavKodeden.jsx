import React, { useState } from "react";
import { NavMap } from "./Common/Helper";

const NavKodeden = () => {
  const [nav, setNav] = useState(false);
  function setopen() {
    setNav(!nav);
    if (nav === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <>
      <nav className="container d-flex justify-content-end align-items-center py_18 ">
        <div className=" d-flex align-items-center gap-3 gap-md-0">
          <ul
            className={`${
              nav ? "end-0" : ""
            } ps-0 mb-0 d-flex align-items-center gap_32 my_nav`}
          >
            {NavMap.map((props, index) => (
              <li key={index}>
                <a
                  href={props.link}
                  onClick={setopen}
                  className="ff_jost fw-medium fs_sm nav_link underline-hover "
                >
                  {props.navlink}
                </a>
              </li>
            ))}
            <a href="#!" className="nav_btn ff_jost fw_extrabolder">
              Get Started
            </a>
          </ul>{" "}
          <div onClick={setopen}>
            {nav ? (
              <div className=" icon d-flex d-md-none flex-column justify-content-between position-relative z-3">
                <span className=" span1 crossLine1"></span>
                <span className=" span3 crossLine2"></span>
              </div>
            ) : (
              <div className="  icon d-flex d-md-none flex-column justify-content-between">
                <span className=" span1"></span>
                <span className=" position-relative span2"></span>
                <span className=" span3"></span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavKodeden;
