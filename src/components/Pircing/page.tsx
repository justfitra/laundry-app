import { FaCheck } from "react-icons/fa";

const Pircing = () => {
  return (
    <>
      <div className="bg-light  flex items-center justify-center px-10 md:px-24">
        <div className="w-full flex flex-col  max-w-7xl py-10 z-30">
          <h1 className="text-2xl font-semibold text-dark">Harga</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
            <div className="border-[1px] rounded-lg p-5 border-dark">
              <h4 className="text-lg text-dark font-medium"> Cuci + Setrika</h4>
              <h2 className="text-3xl font-bold text-dark"> Rp7.000 / Kg </h2>
              <ul className="mt-4 gap-2 flex flex-col">
                <li className="flex items-center gap-2 text-dark/80">
                  <FaCheck className="text-sm" />
                  <h6 className="text-sm">Minimum order 3kg</h6>
                </li>
                <li className="flex items-center gap-2 text-dark/80">
                  <FaCheck className="text-sm" />
                  <h6 className="text-sm">Siap kirim hari berikutnya</h6>
                </li>
                <li className="flex items-center gap-2 text-dark/80">
                  <FaCheck className="text-sm" />
                  <h6 className="text-sm">Deterjen ramah lingkungan</h6>
                </li>
              </ul>
            </div>
            <div className="border-[1px] rounded-lg p-5 border-dark">
              <h4 className="text-lg text-dark font-medium"> Setrika Saja</h4>
              <h2 className="text-3xl font-bold text-dark"> Rp5.000 / Kg </h2>
              <ul className="mt-4 gap-2 flex flex-col">
                <li className="flex items-center gap-2 text-dark/80">
                  <FaCheck className="text-sm" />
                  <h6 className="text-sm">Pakaian Rapi & Siap Pakai</h6>
                </li>
                <li className="flex items-center gap-2 text-dark/80">
                  <FaCheck className="text-sm" />
                  <h6 className="text-sm">Setrika Uap Modern</h6>
                </li>
                <li className="flex items-center gap-2 text-dark/80">
                  <FaCheck className="text-sm" />
                  <h6 className="text-sm">Aroma Wangi Tahan Lama</h6>
                </li>
              </ul>
            </div>
            <div className="border-[1px] rounded-lg p-5 border-dark">
              <h4 className="text-lg text-dark font-medium">Cuci Express</h4>
              <h2 className="text-3xl font-bold text-dark"> Rp10.000 / Kg </h2>
              <ul className="mt-4 gap-2 flex flex-col">
                <li className="flex items-center gap-2 text-dark/80">
                  <FaCheck className="text-sm" />
                  <h6 className="text-sm">Selesai Dalam 6 Jam</h6>
                </li>
                <li className="flex items-center gap-2 text-dark/80">
                  <FaCheck className="text-sm" />
                  <h6 className="text-sm">Prioritas Antrian</h6>
                </li>
                <li className="flex items-center gap-2 text-dark/80">
                  <FaCheck className="text-sm" />
                  <h6 className="text-sm">Ideal Buat Keadaan Darurat</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pircing;
