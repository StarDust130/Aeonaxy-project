import HomePage from "@/components/HomePage";
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

        {/* <SelectPage /> */}

        <HomePage />



       
      </main>
    </>
  );
}
