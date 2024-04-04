import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { PiFastForwardBold } from "react-icons/pi";

interface RightSideProps {
  handleLoginStep1: () => void;
}

const RightSide = ({ handleLoginStep1 }: RightSideProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    username: "",
    email: "",
    password: "",
    marketingAccept: false,
  });

  const { firstName, username, email, password, marketingAccept } = formData;

  const handleInputChange = (e: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Basic validation, you can add more validation logic here
    if (firstName && username && email && password && marketingAccept) {
      handleLoginStep1(); // Proceed to the next step
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="#"
          >
            <span className="sr-only">Home</span>
            <Image
              src={"https://img.icons8.com/3d-fluency/94/christmas-star.png"}
              alt="Image"
              width={100}
              height={100}
            />
          </a>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Aeonaxy Project 🚀
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam dolorum aliquam, quibusdam aperiam voluptatum.
          </p>
        </div>
        <h2 className="hidden lg:block text-3xl mb-5 font-bold text-gray-900">
          Sign up to Aeonaxy Project 🚀
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6 ">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-lg font-extrabold "
            >
              Firstname
            </label>
            <input
              type="text"
              id="FirstName"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              placeholder="John"
              className="mt-1 w-full rounded-md placeholder:text-sm placeholder:text-gray-500 bg-gray-100 p-2 pl-2 outline-none text-lg text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Username" className="block text-lg font-extrabold ">
              Username
            </label>
            <input
              type="text"
              id="Username"
              name="username"
              value={username}
              onChange={handleInputChange}
              placeholder="StarDust"
              className="mt-1 w-full rounded-md placeholder:text-sm placeholder:text-gray-500 bg-gray-100 p-2 pl-2 outline-none text-lg text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-lg font-extrabold ">
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="xyz@gmail.com"
              className="mt-1 w-full rounded-md placeholder:text-sm placeholder:text-gray-500 bg-gray-100 p-2 pl-2 outline-none text-lg text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 ">
            <label htmlFor="Password" className="block text-lg font-extrabold ">
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="6+ characters"
              className=" w-full rounded-md placeholder:text-sm placeholder:text-gray-500 bg-gray-100 p-2 pl-2 outline-none text-lg text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketingAccept"
                checked={marketingAccept}
                onChange={handleInputChange}
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />
              <span className="text-sm lg:text-base font-semibold text-gray-700">
                Creating an account means you&apos;re okay with our{" "}
                <span className="text-blue-700 cursor-pointer hover:underline">
                  Terms of Service,
                </span>{" "}
                <span className="text-blue-700 cursor-pointer hover:underline">
                  Privacy Policy,
                </span>{" "}
                and our{" "}
                <span className="text-blue-700 cursor-pointer hover:underline">
                  default Notification Settings.
                </span>
              </span>
            </label>
          </div>
        </form>
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <Button
            disabled={
              !firstName || !username || !email || !password || !marketingAccept
            }
            onClick={handleLoginStep1}
            className={`bg-pink-500 hover:bg-pink-700 mt-4 ${
              !firstName && "cursor-not-allowed"
            }`}
          >
            Create Account
          </Button>
        </div>
        <div className="text-sm lg:w-[70%] ml-8 mt-2  font-semibold text-gray-500">
          This site is protected by reCAPTCHA and the Google
          <span className="text-blue-700 cursor-pointer hover:underline">
            {" "}
            Privacy Policy
          </span>{" "}
          and{" "}
          <span className="text-blue-700 cursor-pointer hover:underline">
            Terms of Service
          </span>{" "}
          apply.
        </div>
      </div>

      <span className="absolute text-base top-5 right-5 hidden lg:block">
        Already a member?{" "}
        <span className="text-blue-700 cursor-pointer hover:underline">
          Sign in
        </span>
      </span>
      <div
        onClick={handleLoginStep1}
        className="absolute bg-gray-100 hover-bg-gray-200 py-1 px-1 rounded-lg text-gray-500 top-12 right-5 cursor-pointer  justify-center items-center font-bold z-10 hidden md:flex  "
      >
        <PiFastForwardBold />
        <div>Skip</div>
      </div>
    </main>
  );
};
export default RightSide;
