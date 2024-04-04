import Image from "next/image";
import { Input } from "./ui/input";
import { MdWorkHistory } from "react-icons/md";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamIcon } from "lucide-react";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav className="md:flex justify-around items-center py-3 cursor-pointer border-b border-gray-300 w-full hidden ">
        <div className="flex  justify-start gap-5 items-center">
          <Image
            src={"https://img.icons8.com/3d-fluency/94/christmas-star.png"}
            alt="profile"
            width={40}
            height={40}
            className=" hover:animate-spin "
          />
          <div className="font-medium  ml-10 text-xs lg:text-sm text-gray-500 hover:text-gray-700 flex  gap-10 justify-center">
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

          <Avatar className="border-2">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>

          <Button
            className="bg-pink-500 hover:text-white text-white hover:bg-pink-600"
            variant="outline"
          >
            Upload
          </Button>
        </div>
      </nav>

      <nav className="md:hidden flex items-center py-3 cursor-pointer border-b border-gray-300 w-full">
        <div className="flex justify-start items-center flex-grow ml-5">
          <Image
            src={"https://img.icons8.com/3d-fluency/94/christmas-star.png"}
            alt="profile"
            width={40}
            height={40}
            className="hover:animate-spin"
          />
        </div>
        <div className="flex justify-end items-center flex-grow mr-5">
          <div className="flex justify-end item-center gap-5">
            <MdWorkHistory size={35}  color="gray" />
            <Avatar className="border-2">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Sheet>
              <SheetTrigger>
                <GiHamburgerMenu size={30} color="gray" />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src={
                        "https://img.icons8.com/3d-fluency/94/christmas-star.png"
                      }
                      alt="profile"
                      width={40}
                      height={40}
                      className="hover:animate-spin"
                    />
                  </SheetTitle>
                  <SheetDescription>
                    <div className="font-medium  text-center text-xl text-gray-500  flex  gap-10 justify-center flex-col ">
                      <div>Inspiration</div>
                      <div>Find Work</div>
                      <div>Learn Design</div>
                      <div>Go Pro</div>
                      <div>Hire Designers</div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
