import React, { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("d_none");
      document.body.classList.remove("overflow_hidden");
    }, 3500);
  });

  return (
    <div
      id="preloader"
      className="d-flex justify-content-center align-items-center min-vh-100 bg-black flex-column position-fixed z-50 top-0 start-0 end-0"
    >
      <div className="preloader text-center"></div>
      <h2 className="ff_jost fw-semibold white fs_lg lh_38 pt-4">Kodeden</h2>
    </div>
  );
};

export default Preloader;
