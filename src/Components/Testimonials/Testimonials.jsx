import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import qoute_icon from "../../assets/qoute_iocn.png";
import testimonial_1 from "../../assets/5-2.jpg";
import testimonial_2 from "../../assets/4-2.jpg";
import testimonial_3 from "../../assets/3-2.jpg";
import testimonial_4 from "../../assets/2-3.jpg";
import testimonial_5 from "../../assets/1-2.jpg";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    icon: qoute_icon,
    name: "Monty Moni",
    position: "CEO, Keen IT Solution",
    text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
    image: testimonial_1,
  },
  {
    id: 2,
    icon: qoute_icon,
    name: "Mike Hotten",
    position: "CEO, Brick Consulting",
    text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
    image: testimonial_2,
  },
  {
    id: 3,
    icon: qoute_icon,
    name: "John Bhai",
    position: "CEO, Brick Consulting",
    text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
    image: testimonial_3,
  },
  {
    id: 4,
    icon: qoute_icon,
    name: "Jorina Bibi",
    position: "CEO, Brick Consulting",
    text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
    image: testimonial_4,
  },
  {
    id: 5,
    icon: qoute_icon,
    name: "Delu Beta",
    position: "CEO, Brick Consulting",
    text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
    image: testimonial_5,
  },
];
const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <div className="heading">
            <div className="sub-title">
              <h5 className="sub-text ">Testimonials</h5>
            </div>
            <div className="title">
              <h4 style={{ color: "#1c1b1b" }}>
                What Our Clients says About Reobiz.
              </h4>
            </div>
          </div>
          <div className="description">
            <p style={{ color: "#1c1b1b" }}>
              On the other hand we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment so blinded by desire.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <div className="quote-icon">
                  <img src={testimonial.icon} alt="" />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
