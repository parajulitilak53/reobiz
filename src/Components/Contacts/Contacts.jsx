import "./Contacts.css";
const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contact-form-box">
          <h5 className="sub-text">Contact Us</h5>
          <h4 style={{ color: "#fff" }}>Get In Touch.</h4>
          <form className="contact-form">
            <div className="input-field">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  required
                />
              </div>
            </div>
            <div className="input-field">
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="Your Website"
                />
              </div>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message Here"
                required
              ></textarea>
            </div>
            <button type="submit">Submit Now</button>
          </form>
        </div>
        <div className="contact-info">
          <h4 style={{ color: "#fff" }}>Contact Info</h4>
          <div className="info-box">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="512px"
                viewBox="0 0 128 128"
                width="512px"
                className=""
              >
                <g>
                  <g>
                    <path
                      d="m78.777 37.021a14.777 14.777 0 1 0 -14.777 14.779 14.795 14.795 0 0 0 14.777-14.779zm-26.054 0a11.277 11.277 0 1 1 11.277 11.279 11.29 11.29 0 0 1 -11.277-11.279z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="m123.328 121.069-14.266-37.4a1.751 1.751 0 0 0 -1.635-1.126h-27c.165-.269.329-.53.494-.8 10.389-17.2 15.617-32.246 15.542-44.714a32.464 32.464 0 0 0 -64.928-.011c-.075 12.479 5.153 27.527 15.542 44.725.165.273.329.534.494.8h-27a1.751 1.751 0 0 0 -1.635 1.126l-14.264 37.4a1.748 1.748 0 0 0 1.635 2.374h115.386a1.748 1.748 0 0 0 1.635-2.374zm-88.292-84.048a28.964 28.964 0 1 1 57.928.01c.15 24.858-23.09 55.517-28.964 62.869-5.874-7.349-29.115-38-28.964-62.879zm27.631 66.779a1.75 1.75 0 0 0 2.666 0 185.716 185.716 0 0 0 12.9-17.759h27.987l2.24 5.875-54.691 19.451-19.494-25.329h15.49a185.716 185.716 0 0 0 12.902 17.762zm-8.959 11.3h.01l32.627-11.6 12.655 16.443h-58.9zm-31.93-29.062h8.08l20.442 26.562-20.643 7.342h-20.81zm81.643 33.905-13.609-17.682 19.9-7.077 9.443 24.759z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="content-box">
              <span>Office Address</span>
              <p>
                127 Double Street, Dublin, <br /> United Kingdom.{" "}
              </p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="512px"
                viewBox="0 0 512 512.00102"
                width="512px"
                className=""
              >
                <g>
                  <path
                    d="m274.601562 168.46875c38.007813 0 68.929688 30.921875 68.929688 68.929688 0 4.210937 3.414062 7.621093 7.621094 7.621093h30.496094c4.210937 0 7.625-3.410156 7.625-7.621093 0-63.230469-51.441407-114.671876-114.671876-114.671876-4.210937 0-7.625 3.414063-7.625 7.625v30.492188c0 4.210938 3.414063 7.625 7.625 7.625zm7.625-30.203125c48.753907 3.714844 87.792969 42.753906 91.507813 91.507813h-15.300781c-3.636719-40.34375-35.863282-72.570313-76.210938-76.210938v-15.296875zm0 0"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="m279.683594 106.816406c69.203125 0 125.5 56.296875 125.5 125.5 0 4.210938 3.414062 7.625 7.625 7.625h30.492187c4.210938 0 7.625-3.414062 7.625-7.625 0-94.421875-76.820312-171.242187-171.242187-171.242187-4.210938 0-7.621094 3.414062-7.621094 7.625v30.492187c0 4.210938 3.410156 7.625 7.621094 7.625zm7.625-30.3125c79.960937 3.867188 144.316406 68.226563 148.183594 148.1875h-15.265626c-3.839843-71.550781-61.367187-129.082031-132.917968-132.917968zm0 0"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="m284.769531 45.742188c100.074219 0 181.488281 81.417968 181.488281 181.492187 0 4.207031 3.414063 7.621094 7.625 7.621094h30.492188c4.210938 0 7.625-3.414063 7.625-7.621094 0-25.816406-4.261719-51.105469-12.667969-75.15625-1.386719-3.976563-5.734375-6.074219-9.710937-4.683594-3.972656 1.390625-6.070313 5.738281-4.683594 9.710938 7.011719 20.0625 10.933594 41.054687 11.683594 62.503906h-15.261719c-3.925781-102.425781-86.542969-185.042969-188.96875-188.96875v-15.261719c53.765625 1.886719 104.035156 23.71875 142.273437 61.957032 14.910157 14.910156 27.441407 31.769531 37.253907 50.109374 1.984375 3.714844 6.605469 5.113282 10.316406 3.128907 3.714844-1.988281 5.113281-6.605469 3.128906-10.320313-10.519531-19.664062-23.949219-37.730468-39.917969-53.699218-42.917968-42.917969-99.980468-66.554688-160.675781-66.554688-4.210937 0-7.625 3.414062-7.625 7.625v30.492188c0 4.210937 3.414063 7.625 7.625 7.625zm0 0"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="m426.28125 308.117188c-6.667969-6.671876-15.53125-10.34375-24.964844-10.34375-9.429687 0-18.296875 3.671874-24.964844 10.34375l-37.589843 37.589843c-16.453125 16.453125-43.222657 16.453125-59.675781 0l-112.792969-112.796875c-16.453125-16.453125-16.453125-43.222656-.003907-59.671875l37.59375-37.59375c6.667969-6.667969 10.34375-15.535156 10.34375-24.964843 0-9.429688-3.675781-18.296876-10.34375-24.964844l-75.386718-75.375c-13.765625-13.765625-36.164063-13.765625-49.929688 0l-28.871094 28.871094c-32.046874 32.039062-49.695312 74.644531-49.695312 119.957031 0 45.316406 17.648438 87.917969 49.695312 119.960937l13.964844 13.964844c2.976563 2.976562 7.804688 2.976562 10.78125 0 2.976563-2.980469 2.976563-7.804688 0-10.78125l-13.964844-13.964844c-29.164062-29.160156-45.230468-67.933594-45.230468-109.179687 0-38.691407 14.136718-75.207031 39.96875-103.652344l103.617187 103.617187-3.320312 3.320313c-22.398438 22.398437-22.398438 58.84375 0 81.238281l112.792969 112.796875c22.398437 22.394531 58.839843 22.394531 81.238281.003907l3.324219-3.328126 103.601562 103.605469c-17.449219 15.804688-38.339844 27.5-60.867188 33.976563-54.03125 15.507812-112.253906.480468-151.949218-39.222656l-143.796875-143.800782c-2.980469-2.976562-7.804688-2.976562-10.78125 0-2.976563 2.980469-2.976563 7.804688 0 10.78125l143.796875 143.800782c32.253906 32.261718 75.636718 49.699218 120.066406 49.695312 15.636719 0 31.417969-2.160156 46.875-6.597656 27.4375-7.890625 52.671875-22.792969 72.976562-43.097656l28.871094-28.871094c13.765625-13.765625 13.765625-36.164063 0-49.929688zm-360.414062-263.515626 23.480468-23.480468c7.820313-7.820313 20.546875-7.820313 28.367188 0l75.386718 75.375c3.789063 3.789062 5.875 8.828125 5.875 14.183594 0 5.359374-2.085937 10.394531-5.875 14.1875l-23.488281 23.484374zm425.011718 378.050782-23.484375 23.480468-103.746093-103.75 23.488281-23.484374c3.785156-3.789063 8.824219-5.875 14.179687-5.875 5.359375 0 10.398438 2.085937 14.183594 5.875l75.378906 75.386718c3.789063 3.789063 5.875 8.828125 5.875 14.183594s-2.085937 10.394531-5.875 14.183594zm0 0"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="content-box">
              <span>Telephone</span>
              <p>
                p: (+123) 555 8888 <br />
                p: (+123) 555 8899{" "}
              </p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <g data-name="23-Mail">
                  <path
                    fill="#ffffff"
                    d="M28 32H4a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2h-2a1 1 0 0 1 0-2h2a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4z"
                  />
                  <path
                    fill="#ffffff"
                    d="M16 22a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 19.728 29.382 9.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 22z"
                  />
                  <path
                    fill="#ffffff"
                    d="M2 31a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 31zM30 31a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 31zM26 14a1 1 0 0 1-1-1V2H7v11a1 1 0 0 1-2 0V2a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1z"
                  />
                  <path
                    fill="#ffffff"
                    d="M16 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"
                  />
                  <path
                    fill="#ffffff"
                    d="M20 15a1 1 0 0 1-.9-.553C18.157 12.551 17.635 12 16 12s-2.157.551-3.105 2.447a1 1 0 0 1-1.79-.894C12.077 11.609 13.116 10 16 10s3.923 1.609 4.895 3.553A1 1 0 0 1 20 15z"
                  />
                </g>
              </svg>
            </div>
            <div className="content-box">
              <span>Mail Us </span>
              <p>
                E: support@rstheme.com
                <br />
                E: info@codesless.com{" "}
              </p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <g id="_24_hour_3" data-name="24 hour 3">
                  <path
                    fill="#ffffff"
                    d="M23.82 10.44a.51.51 0 0 0-.59-.41.5.5 0 0 0-.4.58A10.89 10.89 0 0 1 23 12.5a.5.5 0 0 0 1 0 11.77 11.77 0 0 0-.18-2.06zM17.45 21.76a11.33 11.33 0 0 1-1.23.56.5.5 0 0 0 .18 1 .57.57 0 0 0 .18 0 10.85 10.85 0 0 0 1.34-.62.49.49 0 0 0 .2-.67.49.49 0 0 0-.67-.27zM20.75 19a10 10 0 0 1-1 1.07.5.5 0 0 0 .35.86.49.49 0 0 0 .35-.14 10.66 10.66 0 0 0 1.06-1.17.5.5 0 1 0-.78-.62zM23.22 15a.5.5 0 0 0-.62.34 10 10 0 0 1-.5 1.39.49.49 0 0 0 .25.66.48.48 0 0 0 .2 0 .5.5 0 0 0 .46-.3 10.51 10.51 0 0 0 .55-1.51.5.5 0 0 0-.34-.58zM22.5 8h.07a.5.5 0 0 0 .2-.08h.05a.8.8 0 0 0 .18-.25l1-3a.5.5 0 1 0-1-.33l-.65 1.93A11.71 11.71 0 0 0 12.5 1a11.5 11.5 0 0 0 0 23 12.62 12.62 0 0 0 1.38-.08.51.51 0 0 0 .44-.56.49.49 0 0 0-.56-.43c-.41 0-.84.07-1.26.07a10.5 10.5 0 0 1 0-21 10.64 10.64 0 0 1 9.12 5H19.5a.47.47 0 0 0-.5.5.5.5 0 0 0 .5.5h3z"
                  />
                  <path
                    fill="#ffffff"
                    d="M10 11.5c-.22.22-.51.49-.88.8l-2.36 2.32a1 1 0 0 0-.22.26.52.52 0 0 0-.06.22v.35a.27.27 0 0 0 .26.26h4.82a.26.26 0 0 0 .19-.08.21.21 0 0 0 .07-.18V15a.21.21 0 0 0-.07-.18.29.29 0 0 0-.19-.07H8.15l2.1-2.13a7 7 0 0 0 .77-.77 2.9 2.9 0 0 0 .47-.78 2.26 2.26 0 0 0 .17-.88 2.46 2.46 0 0 0-.26-1.12 2 2 0 0 0-.82-.83 2.85 2.85 0 0 0-1.42-.31 2.75 2.75 0 0 0-1.11.21 2.24 2.24 0 0 0-.79.55 2.3 2.3 0 0 0-.49.76 2.53 2.53 0 0 0-.18.84.21.21 0 0 0 .07.15.23.23 0 0 0 .16.06h.57a.32.32 0 0 0 .17-.06.27.27 0 0 0 .12-.19 2 2 0 0 1 .24-.71 1.22 1.22 0 0 1 .49-.49 1.49 1.49 0 0 1 .75-.18 1.35 1.35 0 0 1 1 .37 1.33 1.33 0 0 1 .35 1 1.55 1.55 0 0 1-.13.63 2.41 2.41 0 0 1-.38.63zM18.43 12.93h-1V8.3a.24.24 0 0 0-.07-.18.23.23 0 0 0-.18-.07h-.78a.46.46 0 0 0-.4.18l-3.28 4.63a.65.65 0 0 0-.09.19.5.5 0 0 0 0 .14v.44a.24.24 0 0 0 .07.18.29.29 0 0 0 .18.07h3.54v1.57a.25.25 0 0 0 .07.18.26.26 0 0 0 .19.08h.54a.23.23 0 0 0 .18-.08.21.21 0 0 0 .07-.18v-1.57h1a.29.29 0 0 0 .18-.07.24.24 0 0 0 .07-.18v-.45a.23.23 0 0 0-.07-.18.25.25 0 0 0-.22-.07zm-2 0h-2.66L16.4 9.2z"
                  />
                </g>
              </svg>
            </div>
            <div className="content-box">
              <span>Opening Hours </span>
              <p>
                Mon-Fri: 10:00-18:00
                <br />
                Sat-Sun: 10:00-14:00{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
