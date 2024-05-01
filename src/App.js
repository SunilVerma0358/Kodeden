import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Header from "./components/Header";
import SoftwareEng from "./components/SoftwareEng";
import SoftwareEngCourse from "./components/SoftwareEngCourse";
import OurProgam from "./components/OurProgam";
import Student from "./components/Student";
import OurGuarantee from "./components/OurGuarantee";
import WhoAre from "./components/WhoAre";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <div className="theme">
      <Preloader /> <Header />
      <SoftwareEng />
      <SoftwareEngCourse />
      <OurProgam />
      <Student />
      <OurGuarantee />
      <WhoAre />
      <Footer /> <BackToTop />{" "}
    </div>
  );
}

export default App;
