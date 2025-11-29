import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              Turn endless questions <br />
              <span>into answers</span>
            </h1>
          </div>
          <div className="button-first">
            <button>Try Metabase Cloud free</button>
            <button>Deploy Metabase Open Source</button>
          </div>
          <div className="trial-section">
            <p>
              <FontAwesomeIcon icon={faCircleCheck} />
              Free 14-day trial.
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} />
              Super-fast setup
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} />
              Open source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
