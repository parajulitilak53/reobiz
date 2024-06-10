import "./Services.css";
import service_1 from "../../assets/icon_1.png";
import service_2 from "../../assets/icon_2.png";
import service_3 from "../../assets/icon_3.png";
import { useState } from "react";

const Services = () => {
  const [services] = useState([
    {
      image: service_1,
      title: "Financial Consult",
      description:
        "Qualify more leads automatically and the close more deals around the clock with & chatbots and live chat language.",
    },
    {
      image: service_2,
      title: "Business Audit",
      description:
        "Qualify more leads automatically and the close more deals around the clock with & chatbots and live chat language.",
    },
    {
      image: service_3,
      title: "Tax Consultent",
      description:
        "Qualify more leads automatically and the close more deals around the clock with & chatbots and live chat language.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services-container">
          {services.map((service, i) => (
            <div key={i} className="card">
              <div className="card-image">
                <img src={service.image} alt="" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
