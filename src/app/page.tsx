import LeftSide from "@/components/LeftSide";
import ProfilePage from "@/components/ProfilePage";
import RightSide from "@/components/RightSide";
import SelectPage from "@/components/SelectPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="h-screen w-full ">
        {/* <section className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
           
            <LeftSide />

           
            <RightSide />
          </div>
        </section> */}
        {/* <ProfilePage /> */}

        <SelectPage />



        <Image
          src={"https://img.icons8.com/3d-fluency/94/christmas-star.png"}
          alt="hero"
          height={50}
          width={50}
          className=" inset-0 z-10 top-8 left-16 hover:animate-spin cursor-pointer  object-contain opacity-80 brightness-125 hidden lg:block absolute "
        />
      </main>
    </>
  );
}
