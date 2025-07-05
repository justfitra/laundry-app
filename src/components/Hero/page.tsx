import Image from "next/image";
import ImageContent from "@/../public/assets/images/laundry-content.png";

const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('/assets/images/bg-1.jpg')` }}
        className="flex flex-col items-center  bg-light min-h-screen bg-cover bg-no-repeat bg-center justify-center w-full px-24 text-white "
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="w-full flex  max-w-7xl py-10 z-30">
          <div className="w-[60%]">
            <div className=" my-4">
              <h1 className="text-5xl font-semibold drop-shadow-dark drop-shadow-2xl">
                Cuci Baju Jadi Gampang. Cepat & Bersih
              </h1>
              <h6 className="text-lg my-8">
                Jemput antar langsung ke rumahmu, gratis biaya antar!
              </h6>
              <div className="my-8">
                <button className="bg-primary py-2 px-6 rounded-md ">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <Image
              src={ImageContent}
              alt="image"
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
