import "./Hero.css";
import video from "../../assets/hero_video.mp4";
import Button1 from "../Button1/Button1";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div className="content container">
          <h5>FINANCE CONSULTING</h5>
          <h2>
            Business Consulting <br /> For Finance.
          </h2>
          <div className="hero-btn">
            <Button1 />
          </div>
        </div>
        <div className="shape"></div>
      </div>
    </>
  );
};

export default Hero;
