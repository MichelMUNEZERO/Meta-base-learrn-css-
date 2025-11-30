import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import mail from "../assets/mail.png";
import notion from "../assets/notion.png";
import slack from "../assets/slack.png";
import heroImage from "../photo/heroImage.png";

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              Turn endless questions <br />
              <span> into answers </span>
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
      <div className="hero-lower-section">
        <div className="container">
          <div className="container-in">
            <div className="container-image">
              <img src={notion} alt="Notion" />
            </div>
            <div className="container-paragraph">
              <h4>Q4 Board Meeting Notes</h4>
              <p>
                ...where is the competitors comparison we were talking about?
              </p>
            </div>
          </div>
          <div className="container-in">
            <div className="container-image">
              <img src={slack} alt="Slack" />
            </div>
            <div className="container-paragraph">
              <h4>#team-growth</h4>
              <p> Liam:Could you provide a breakdown of NRR by segment? </p>
            </div>
          </div>
          <div className="container-in">
            <div className="container-image">
              <img src={mail} alt="Mail" />
            </div>
            <div className="container-paragraph">
              <h4>FWD:Q3 Review</h4>
              <p>
                I sent a request yesterday about churn modeling. Any updates?
              </p>
            </div>
          </div>

          <div className="container-in">
            <div className="container-image">
              <img src={slack} alt="Slack" />
            </div>
            <div className="container-paragraph">
              <h4>#biz-ops</h4>
              <p>
                Sofia:Asking again, can we REFRESH the metrics on expansion
                remain?
              </p>
            </div>
          </div>
          <div className="container-in">
            <div className="container-image">
              <img src={slack} alt="Slack" />
            </div>
            <div className="container-paragraph">
              <h4>#ama-data</h4>
              <p>
                Dan:Any luck pulling.win/loss data by vertical?I need this ASAP
              </p>
            </div>
          </div>
          <div className="container-in">
            <div className="container-image">
              <img src={notion} alt="Notion" />
            </div>
            <div className="container-paragraph">
              <h4>Company Goals 2025</h4>
              <p>
                Can we get a status update on the new charts for the company
                goals
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overview-section">
        <div className="overview-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}
