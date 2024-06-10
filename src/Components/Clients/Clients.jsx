import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Clients.css";
import client_1 from "../../assets/3.1.png";
import client_2 from "../../assets/4.1.png";
import client_3 from "../../assets/2.1.png";
import client_4 from "../../assets/1.1.png";
import client_5 from "../../assets/5.1.png";

const clients = [
  {
    id: 1,
    image: client_1,
  },
  {
    id: 2,
    image: client_2,
  },
  {
    id: 3,
    image: client_3,
  },
  {
    id: 4,
    image: client_4,
  },
  {
    id: 4,
    image: client_5,
  },
];

const Clients = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          <Slider {...settings}>
            {clients.map((client) => (
              <div key={client.id} className="client-card">
                <div className="client-image">
                  <img src={client.image} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;
