import Image from "next/image";
import Button from "./Button";

const RightSide = () => {
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

        <form action="#" className="mt-8 grid grid-cols-6 gap-6 ">
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
              name="first_name"
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
              name="last_name"
              placeholder="StarDust"
              className="mt-1 w-full rounded-md placeholder:text-sm placeholder:text-gray-500 bg-gray-100 p-2 pl-2 outline-none text-lg text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-lg font-extrabold  ">
              {" "}
              Email{" "}
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              placeholder="xyz@gmail.com"
              className="mt-1 w-full rounded-md placeholder:text-sm placeholder:text-gray-500 bg-gray-100 p-2 pl-2 outline-none text-lg text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 ">
            <label htmlFor="Password" className="block text-lg font-extrabold ">
              {" "}
              Password{" "}
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              placeholder="6+ characters"
              className=" w-full rounded-md placeholder:text-sm placeholder:text-gray-500 bg-gray-100 p-2 pl-2 outline-none text-lg text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
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
                </span>{" "}
              </span>
            </label>
          </div>
        </form>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <Button title="Create Account" />
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
    </main>
  );
};
export default RightSide;
