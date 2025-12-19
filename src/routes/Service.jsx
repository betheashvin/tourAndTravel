import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Img from "../assets/4.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={Img}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
