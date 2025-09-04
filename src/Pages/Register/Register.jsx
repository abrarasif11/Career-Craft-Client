import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottieData from "../../assets/Lottie/register.json.json";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

 const handleGoogleSignIn = () => {
  signInWithGoogle()
  .then(res => {
    console.log(res.user)
  })
  .catch(err => {
    console.log(err.message)
  })
 }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    // ✅ Password validation: at least 6 chars, 1 uppercase, 1 number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long, contain one uppercase letter and one number."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // ✅ If you want to save/display name, use updateProfile

        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            console.log("Name updated:", name);
          })
          .catch((err) => {
            console.error("Profile update failed:", err);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center mt-10 mb-10 justify-center min-h-screen px-4 py-10 bg-gray-100">
      {/* Form Section */}
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white text-gray-800">
        <p className="text-center font-medium">Register</p>
        <h2 className="mb-3 text-2xl md:text-3xl font-semibold text-center">
          Start for free Today
        </h2>
        <p className="text-center mb-2 text-sm md:text-base">
          Access to all features. No credit card required.
        </p>
        <p className="text-sm text-center text-gray-600">
          Already have an account?
          <Link
            to="/signin"
            rel="noopener noreferrer"
            className="focus:underline hover:underline text-violet-600"
          >
            <span> Sign In</span>
          </Link>
        </p>

        {/* Google Button */}
        <div className="my-6">
          <button
          onClick={handleGoogleSignIn}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-3 md:p-4 space-x-3 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-300 focus:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center w-full my-4">
          <hr className="w-full border-gray-300" />
          <p className="px-3 text-gray-600 text-sm">OR</p>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Kabir"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a href="#" className="text-xs hover:underline text-gray-600">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700 transition"
          >
            Register
          </button>
        </form>
      </div>

      {/* Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <Lottie
          animationData={registerLottieData}
          className="max-w-xs md:max-w-md"
        />
      </div>
    </div>
  );
};

export default Register;
