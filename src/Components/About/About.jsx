import "./About.css";
import aboutImage from "../../assets/about_right_image1.png";
import shape from "../../assets/shape_3.png";
import icon from "../../assets/icon_4.png";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Button2 from "../Button2/Button2";
const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="container">
      <div className="about-container">
        <div className="about-left-container">
          <h5 className="sub-text ">WHO WE ARE (WIN WIN GLOBAL INVESTMENT)</h5>
          <h4>Experts Financial Solutions For Incredible Business.</h4>
          <p>
            On the other hand we denounce with righteous indignation and dislike
            men who are so beguiled and demoralized by the charms of pleasure of
            the moment so blinded by desire.
          </p>
          <ul>
            <li>
              <i className="fa fa-check"></i>
              <span>Production or trading of good or services for sale</span>
            </li>
            <li>
              <i className="fa fa-check"></i>
              <span>Cost of supplies and equipment</span>
            </li>
            <li>
              <i className="fa fa-check"></i>
              <span>Change in the volume of expected sales</span>
            </li>
          </ul>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="counter">
              <div className="customer-counter">
                <span>
                  {counterOn && (
                    <CountUp start={0} end={25} duration={2.75}></CountUp>
                  )}{" "}
                  +
                </span>
                <p>Happy Customers</p>
              </div>
              <div className="cases-counter">
                <span>
                  {counterOn && (
                    <CountUp start={379} end={436} duration={2.75}></CountUp>
                  )}{" "}
                  +
                </span>
                <p>Completed Cases</p>
              </div>
            </div>
          </ScrollTrigger>
          <div className="read-more-call-us">
            <div className="button">
              <Button2 />
            </div>
            <div className="call-us-now">
              <div className="call-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="call-number">
                <p>Call Us Now</p>
                <span>+123 456 7890</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right-container">
          <div className="img-container">
            <img src={aboutImage} alt="" />
          </div>
          <div className="success-rate-counter">
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="counter">
                <div className="success-counter">
                  <span>
                    {counterOn && (
                      <CountUp start={0} end={99} duration={2.75}></CountUp>
                    )}{" "}
                    %
                  </span>
                  <p>Success Rate</p>
                </div>
              </div>
            </ScrollTrigger>
          </div>
          <div className="shape">
            <img src={shape} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
