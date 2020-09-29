import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

import classNames from "classnames";

const SocialComponents = () => {
  const emailClasses = classNames("buttonHolder", "email");
  const [copied, setCopied] = useState("");
  const [visible, setVisible] = useState("copiedNotifHidden");

  useEffect(() => {
    if (visible === "copiedNotif") {
      setTimeout(() => {
        setVisible("copiedNotifHidden");
      }, 1000);
    }
  }, [visible]);
  return (
    <div className="buttonsContainer">
      <div className={emailClasses}>
        <div className={visible}>{copied}</div>

        <SocialIcon
          network="mailto"
          fgColor="#FFFFFF"
          bgColor="#0c297e"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            navigator.clipboard.writeText("autumnal.zoe@gmail.com");
            setCopied("Copied to clipboard");
            visible === "copiedNotifHidden"
              ? setVisible("copiedNotif")
              : setVisible("copiedNotifHidden");
          }}
        />
      </div>

      <div className="buttonHolder">
        <a
          href="https://github.com/CyrusTheCurator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon
            network="github"
            fgColor="#FFFFFF"
            bgColor="#3873aa"
            style={{ cursor: "pointer" }}
          />
        </a>
        GitHub
      </div>

      <div className="buttonHolder">
        <a
          href="https://www.linkedin.com/in/zoe-a-brandt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon
            network="linkedin"
            fgColor="#FFFFFF"
            style={{ cursor: "pointer" }}
          />
        </a>
        LinkedIn
      </div>
      <div className="buttonHolder">
        <a
          href="https://twitter.com/Zo_Zon3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon
            network="twitter"
            fgColor="#FFFFFF"
            style={{ cursor: "pointer" }}
          />
        </a>
        Twitter
      </div>
    </div>
  );
};

export default SocialComponents;
