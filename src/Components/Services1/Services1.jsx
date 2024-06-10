import "./Services1.css";
import service_1 from "../../assets/icon_1.png";
import service_2 from "../../assets/icon_6.png";
import service_3 from "../../assets/icon_7.png";
import service_4 from "../../assets/icon_8.png";
import service_5 from "../../assets/icon_9.png";
import service_6 from "../../assets/icon_10.png";
import { useState } from "react";
const Services1 = () => {
  const [services] = useState([
    {
      image: service_1,
      title: "Financial Consult",
      description:
        "Qualify more leads automatically and the close more deals around the clock with & chatbots and live chat language.",
    },
    {
      image: service_2,
      title: "Capital Growth",
      description:
        "Qualify more leads automatically and the close more deals around the clock with & chatbots and live chat language.",
    },
    {
      image: service_3,
      title: "Banking Advicing",
      description:
        "Qualify more leads automatically and the close more deals around the clock with & chatbots and live chat language.",
    },
    {
      image: service_4,
      title: "Audit Marketing",
      description:
        "Qualify more leads automatically and the close more deals around the clock with & chatbots and live chat language.",
    },
    {
      image: service_5,
      title: "Investment Planning",
      description:
        "Qualify more leads automatically and the close more deals around the clock with & chatbots and live chat language.",
    },
    {
      image: service_6,
      title: "Saving Money",
      description:
        "Qualify more leads automatically and the close more deals around the clock with & chatbots and live chat language.",
    },
  ]);
  return (
    <div className="services1">
      <div className="container">
        <div className="service-heading">
          <div className="heading">
            <div className="sub-title">
              <h5 className="sub-text ">What we do</h5>
            </div>
            <div className="title">
              <h4 style={{ color: "#fff" }}>
                We Ensure Best Financial Services For Our Clients.
              </h4>
            </div>
          </div>
          <div className="description">
            <p style={{ color: "#fff" }}>
              On the other hand we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment so blinded by desire.
            </p>
          </div>
        </div>
        <div className="cards-container">
          {services.map((service, i) => (
            <div key={i} className="cards">
              <div className="cards-content">
                <h3 className="cards-title" style={{ color: "#fff" }}>
                  {service.title}
                </h3>
                <p className="cards-description" style={{ color: "#fff" }}>
                  {service.description}
                </p>
              </div>
              <div className="cards-image">
                <img src={service.image} alt="" />
                <div className="service-btn">
                  <a href="#">
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services1;
