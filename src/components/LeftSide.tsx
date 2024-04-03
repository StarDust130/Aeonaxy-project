import Image from "next/image";

const LeftSide = () => {
  return (
    <section className=" relative   flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <Image
        alt="banner"
        src="https://images.unsplash.com/photo-1528459709161-157d86910939?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className=" inset-0 h-full w-full object-auto opacity-80 brightness-125"
        width={1000}
        height={1000}
      />

      <Image
        src={"/img.png"}
        alt="hero"
        height={500}
        width={500}
        className="absolute inset-0 z-10 top-0 left-0 h-full w-full object-contain opacity-80 backdrop-brightness-125 "
      />
      
    </section>
  );
};
export default LeftSide;
