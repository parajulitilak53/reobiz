import "./Footer.css";
import logo1 from "../../assets/logo-1.png";
import blog_1 from "../../assets/blog1-1-1-80x68.jpg";
import blog_2 from "../../assets/blog2-1-1-80x68.jpg";
const footer = [
  {
    image: logo1,
    text: "We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the charms of pleasure moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.",
    button: "Discover More",
  },
  {
    title: "Contact Info",
    contacts: [
      {
        icon: "fa fa-map-marker",
        text: "374 William S Canning Blvd, Fall River MA 2721, USA",
      },
      {
        icon: "fa fa-phone-volume",
        text: "(+880)155-69569",
      },
      {
        icon: "fa-regular fa-envelope",
        text: "info@company.com",
      },
      {
        icon: "fa-regular fa-clock",
        text: "10:00 - 17:00",
      },
    ],
  },
  {
    title: "Latest Posts",
    text: "Hello world!",
    date: "March 29, 2024",
    icon: "fa-regular fa-calendar",
    posts: [
      {
        image: blog_1,
        title: "Covid-19 threatens the next generation of smartphones",
        icon: "fa-regular fa-calendar",
        date: " April 6, 2020",
      },
      {
        image: blog_2,
        title: "Soundtrack filma Lady Exclusive Music",
        icon: "fa-regular fa-calendar",
        date: "September 6, 2019",
      },
    ],
  },
  {
    text: "©copyright 2023 Reobiz. Designed By RSTheme",
    socialMedia: [
      {
        link: "#",
        icon: "fab fa-facebook-f",
      },
      {
        icon: "fab fa-x-twitter",
      },
      {
        icon: "fab fa-pinterest-p",
      },
      {
        icon: "fab fa-linkedin-in",
      },
    ],
  },
];

// const bottomFooter = [
//   {
//     text: "©copyright 2023 Reobiz. Designed By RSTheme",
//     socialMedia: [
//       {
//         icon: "fab fa-facebook-f",
//       },
//       {
//         icon: "fab fa-twitter",
//       },
//       {
//         icon: "fab fa-pinterest-p",
//       },
//       {
//         icon: "fab fa-linkedin-in",
//       },
//     ],
//   },
// ];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-0">
            <img src={footer[0].image} alt="" />
            <p>{footer[0].text}</p>
            <button className="footer-btn" type="submit">
              {footer[0].button}
            </button>
          </div>
          <div className="footer-1">
            <h4 style={{ color: "#fff" }}>{footer[1].title}</h4>
            {footer[1].contacts.map((contact) => (
              <div key={contact.icon} className="contact">
                <i className={contact.icon}></i>
                <p>{contact.text}</p>
              </div>
            ))}
          </div>
          <div className="footer-2">
            <h4 style={{ color: "#fff" }}>{footer[2].title}</h4>
            <p>{footer[2].text}</p>
            <p>
              <i className={footer[2].icon}></i> {footer[2].date}
            </p>
            {footer[2].posts.map((post) => (
              <div key={post.image} className="post">
                <img src={post.image} alt="" />
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>
                    <i className={post.icon}></i> {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ color: "#fff" }}>{footer[3].text}</p>
          <div className="social-media">
            {footer[3].socialMedia.map((icon) => (
              <a
                href={icon.link}
                key={icon.link}
                alt=""
                style={{ color: "#fff" }}
              >
                <i className={icon.icon} key={icon.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
