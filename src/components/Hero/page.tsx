import Image from "next/image";
import ImageContent from "@/../public/assets/images/laundry-content.png";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('/assets/images/bg-1.jpg')` }}
        className="flex flex-col items-center  bg-light min-h-screen bg-cover bg-no-repeat bg-center justify-center w-full px-10 lg:px-24 text-white "
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="w-full flex  max-w-7xl py-10 z-30">
          <div className="w-full md:w-[60%]">
            <div className=" my-4">
              <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-dark drop-shadow-2xl">
                Cuci Baju Jadi Gampang. Cepat & Bersih
              </h1>
              <h6 className="text-lg my-8">
                Jemput antar langsung ke rumahmu, gratis biaya antar!
              </h6>
              <div className="my-8">
                <Link
                  href={"#contact"}
                  className="bg-primary py-2 px-6 rounded-md hover:bg-secondary hover:text-primary transition-all ease-in-out duration-150 cursor-pointer"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 md:flex hidden">
            <Image
              src={ImageContent}
              alt="image"
              className="absolute  bottom-0 md:left-auto left-20 md:right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
