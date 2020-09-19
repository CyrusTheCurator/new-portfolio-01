import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialComponents = () => {
  return (
    <div className="buttonsContainer">
      <div className="buttonHolder">
        <SocialIcon
          url="mailto:autumnal.zoe@gmail.com"
          network="mailto"
          fgColor="#FFFFFF"
          bgColor="#0c297e"
        />
        Email
      </div>

      <div className="buttonHolder">
        <SocialIcon
          url="https://github.com/CyrusTheCurator"
          fgColor="#FFFFFF"
          bgColor="#3873aa"
        />
        GitHub
      </div>

      <div className="buttonHolder">
        <SocialIcon
          url="https://www.linkedin.com/in/zoe-a-brandt/"
          fgColor="#FFFFFF"
        />
        LinkedIn
      </div>
      <div className="buttonHolder">
        <SocialIcon url="https://twitter.com/Zo_Zon3" fgColor="#FFFFFF" />
        Twitter
      </div>
    </div>
  );
};

export default SocialComponents;
