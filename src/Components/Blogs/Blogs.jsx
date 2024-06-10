import "./Blogs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog_1 from "../../assets/blog3-1-1-1024x572.jpg";
import blog_2 from "../../assets/blog4-1-1-1024x572.jpg";
import blog_3 from "../../assets/blog5-1-1-1024x572.jpg";
import blog_4 from "../../assets/blog9-1-1-1024x572.jpg";
import icon from "../../assets/10523405084cd5565ac85abee72ff8c9.png";

const blogs = [
  {
    id: 1,
    image: blog_1,
    subTitle: "Consulting",
    title: "Winged moved stars, fruit creature seed night.",
    text: "People denounce rightous indignae and dislike men who are so beguiled and demo realized by the charms...",
    avatar: icon,
    admin: "Amrit Adhikari",
    date: "06 Sep 2019",
  },
  {
    id: 2,
    image: blog_2,
    subTitle: "Development",
    title: "Banks can now reschedule default loans",
    text: "We denounce with righteous indignation and dislike men who are so beguiled and demo realized by the...",
    avatar: icon,
    admin: "Amrit Adhikari",
    date: "06 Sep 2019",
  },
  {
    id: 3,
    image: blog_3,
    subTitle: "Creative",
    title: "Lights winged seasons fish abundantly evening.",
    text: "Dhaka denounce with righteous indignation and dislike men who are so beguiled and demo realized by the...",
    avatar: icon,
    admin: "Amrit Adhikari",
    date: "06 Sep 2019",
  },
  {
    id: 4,
    image: blog_4,
    subTitle: "Development",
    title: "If the White Whale be raised, it must be in a month",
    text: "We denounce with righteous indignation and dislike men who are so beguiled and demo realized by the...",
    avatar: icon,
    admin: "Amrit Adhikari",
    date: "06 Sep 2019",
  },
];
const Blogs = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
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
    <div className="container">
      <div className="blogs-heading">
        <div className="heading">
          <div className="sub-title">
            <h5 className="sub-text ">LATEST NEWS</h5>
          </div>
          <div className="title">
            <h4 style={{ color: "#1c1b1b" }}>
              Read Our Latest News Articles & Insights.
            </h4>
          </div>
        </div>
        <div className="description">
          <p style={{ color: "#1c1b1b" }}>
            On the other hand we denounce with righteous indignation and dislike
            men who are so beguiled and demoralized by the charms of pleasure of
            the moment so blinded by desire.
          </p>
        </div>
      </div>
      <div className="blog-container">
        <Slider {...settings}>
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-card-image">
                <img src={blog.image} alt="" />
                <div className="overlay"></div>
                <div className="arrow-right">
                  <a href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div>
                <div className="blog-card-content">
                  <h5 className="card-sub-title">{blog.subTitle}</h5>
                  <h3 className="card-title">{blog.title}</h3>
                  <p className="card-description">{blog.text}</p>
                </div>
                <div className="card-footer">
                  <div className="card-avatar">
                    <img src={blog.avatar} alt="" />
                    <div className="card-admin">
                      <p>{blog.admin}</p>
                    </div>
                  </div>
                  <div className="card-date">
                    <p>
                      <i className="fa-regular fa-clock"></i> {blog.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
