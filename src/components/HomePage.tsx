import Footer from "./Footer";
import Navbar from "./Navbar";
import { MdMarkEmailRead } from "react-icons/md";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CakeIcon, Terminal } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="w-full h-screen flex flex-col justify-center gap-8 items-center">
        <h1 className="md:text-4xl text-2xl sm:text-3xl font-bold">
          Please verify your email...
        </h1>
        <MdMarkEmailRead color="gray" size={80} />

        <p className="text-gray-500 text-sm text-center">
          Please verifiy your email address. We&apos;ve sent a confirmation
          email to.{" "}
        </p>
        <h4 className="text-lg font-medium">account@refro.desgin</h4>

        <p className="text-gray-500 text-sm text-center">
          Click the confrimation link in that email to begin using Aeonaxy 🦏
        </p>
        <p className="text-gray-500 text-sm text-center">
          Don&apos;t receive the email? Check you Spam folder. it may have been
          caught by a filter if you still don&apos; t see it you can{" "}
          <span className="text-pink-500 hover:underline cursor-pointer hover:text-pink-700">
            resend the confirmation email
          </span>
        </p>
        <p className="text-gray-500 text-sm text-center">
          Wrong email address?{" "}
          <span className="text-pink-500 hover:underline cursor-pointer hover:text-pink-7">
            Change it
          </span>
        </p>
      </section>
      <Footer />
    </>
  );
};
export default HomePage;
