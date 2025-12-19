import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Img from "../assets/1.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={Img}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
