import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrResume } from "react-icons/gr";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/deepak-singh-rathore-a100aa181/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Deepak123bharat" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://drive.google.com/file/d/12ZIFGAFEGWiLSavXGhr3vL5ACfeP35Pj/view?usp=sharing"
        target="_blank"
      >
        <GrResume />
      </a>
    </div>
  </div>
);

export default SocialMedia;
