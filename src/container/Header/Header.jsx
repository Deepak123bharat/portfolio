import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Deepak</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Full Stack Developer</p>
          <p className="p-text">Open Source Enthusiast</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" style={{ width: "566px" }} />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/deepak-singh-rathore-a100aa181/",
            "_blank"
          )
        }
        className="circle-cmp app__flex"
        key={`circle-${0}`}
      >
        <img src={images.flutter} alt="profile_bg" />
      </div>

      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/12ZIFGAFEGWiLSavXGhr3vL5ACfeP35Pj/view?usp=sharing",
            "_blank"
          )
        }
        className="circle-cmp app__flex"
        key={`circle-${1}`}
      >
        <img src={images.redux} alt="profile_bg" />
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open("https://github.com/Deepak123bharat", "_blank")
        }
        className="circle-cmp app__flex"
        key={`circle-${2}`}
      >
        <img src={images.sass} alt="profile_bg" />
      </div>
      {/* {[images.flutter, images.redux, images.sass].map((circle, index) => (
        
      ))} */}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
