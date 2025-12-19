import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm"; // We will create this next

function SignUp() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "100px", textAlign: "center" }}>
 
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
}

export default SignUp;