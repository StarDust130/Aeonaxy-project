import Image from "next/image";
import { Input } from "./ui/input";
import { MdWorkHistory } from "react-icons/md";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-3 cursor-pointer border-b border-gray-300 w-full">
      <div className="flex  justify-start gap-5 items-center">
        <Image
          src={"https://img.icons8.com/3d-fluency/94/christmas-star.png"}
          alt="hero"
          height={50}
          width={50}
          className=" inset-0 z-10 top-1 left-2 hover:animate-spin cursor-pointer  object-contain opacity-80 brightness-125 hidden lg:block absolute "
        />

        <div className="font-medium  ml-10 text-sm text-gray-500 hover:text-gray-700 flex  gap-10 justify-center">
          <div>Inspiration</div>
          <div>Find Work</div>
          <div>Learn Design</div>
          <div>Go Pro</div>
          <div>Hire Designers</div>
        </div>
      </div>

      <div className="flex justify-end w-1/2 px-5    gap-5 items-center">
        <Input className="w-40" placeholder="Search" />
        <MdWorkHistory size={30} color="gray" />
        <Image
          src={"/img.png"}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full border-2 "
        />
        <Button className="bg-pink-500" variant="outline">
          Upload
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
