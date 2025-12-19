import "./SignUpFormStyles.css"; // We will create this CSS file

function SignUpForm() {
  return (
    <div className="signup-form-container">
      <h1>Create Your Account</h1>
      <form>
        <input placeholder="Full Name" type="text" />
        <input placeholder="Email Address" type="email" />
        <input placeholder="Password" type="password" />
        <input placeholder="Confirm Password" type="password" />
        <button>Sign Up</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Already have an account? <a href="/login" style={{ color: "#01959a" }}>Login Here</a>
      </p>
    </div>
  );
}

export default SignUpForm;