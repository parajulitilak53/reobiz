import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Services1 from "./Components/Services1/Services1";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contacts from "./Components/Contacts/Contacts";
import Blogs from "./Components/Blogs/Blogs";
import Clients from "./Components/Clients/Clients";
import Footer from "./Components/Footer/Footer";
import GoToTopButton from "./Components/GoToTopButton/GoToTopButton";
import { useState, useEffect } from "react";
import SplashScreen from "./Components/SplashScreen/SplashScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // The same duration as the splash screen

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div>
          <div className="sticky">
            <Header />
            <Navbar></Navbar>
          </div>
          <div className="section">
            <Hero />
            <Services />
            <About />
            <Services1 />
            <Portfolio />
            <Testimonials />
            <Contacts />
            <Blogs />
            <Clients />
            <GoToTopButton />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
