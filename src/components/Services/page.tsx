import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineIron } from "react-icons/md";
import { RiEBikeFill } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="bg-light  flex items-center justify-center px-24">
        <div className="w-full flex flex-col  max-w-7xl py-10 z-30">
          <h1 className="text-2xl font-semibold text-dark">Layanan Kami</h1>
          <div className="grid grid-cols-3 gap-8 py-10">
            <div className="">
              <div className="  flex items-center justify-center">
                <GiWashingMachine className=" text-[150px] text-dark" />
                <MdOutlineIron className="text-[100px]  text-dark  -ml-8 -mb-[150px]" />
              </div>
              <div className="flex items-center flex-col justify-center my-10 text-dark">
                <h1 className="text-xl font-semibold "> Cuci + Setrika</h1>
                <p className="text-center text-dark/80">
                  Paket lengkap: pakaianmu dicuci bersih dan disetrika rapi.
                  Langsung siap pakai, cocok buat kamu yang sibuk.
                </p>
              </div>
            </div>
            <div className="">
              <div className="  flex items-center justify-center">
                <MdOutlineIron className="text-[150px]  text-dark " />
              </div>
              <div className="flex items-center flex-col justify-center my-10 text-dark">
                <h1 className="text-xl font-semibold "> Setrika</h1>
                <p className="text-center text-dark/80">
                  Pakaianmu sudah bersih tapi kusut? Kami bantu setrika biar
                  kamu tampil rapi setiap hari.
                </p>
              </div>
            </div>
            <div className="">
              <div className="  flex items-center justify-center">
                <RiEBikeFill className="text-[150px]  text-dark " />
              </div>
              <div className="flex items-center flex-col justify-center my-10 text-dark">
                <h1 className="text-xl font-semibold "> Antar Jemput</h1>
                <p className="text-center text-dark/80">
                  Kami jemput cucianmu ke rumah dan antar kembali setelah
                  selesai. Gak perlu keluar rumah, hemat waktu & tenaga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
