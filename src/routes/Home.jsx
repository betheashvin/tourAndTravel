import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
       title="Your Journey Your Story"
       text="Choose your Favourite Destination."
       buttonText="Travel Plan"
       url="/service"
       btnClass="show"
        />
        <Destination/>  
        <Trip/> 
        <Footer />
        </>
    );
}

export default Home;