import { IoMdArrowDroprightCircle } from "react-icons/io";

const WorkSystem = () => {
  return (
    <>
      <div className="bg-light  flex items-center justify-center px-10 md:px-24">
        <div className="w-full flex flex-col  max-w-7xl py-10 z-30 text-dark">
          <h1 className="text-2xl font-semibold text-dark">
            Cara Kerjanya - Mudah dan Cepat
          </h1>
          <div className="my-4">
            <ul>
              <li className="border-l-2 px-4 py-2 border-dark relative">
                <div>
                  <h4 className="text-lg font-semibold">
                    <IoMdArrowDroprightCircle className="absolute -ml-[27px] bg-white mt-1" />
                    Pilih Layanan
                  </h4>
                  <p className="text-base text-dark/60">
                    Pilih jenis layanan yang kamu butuhkan: cuci kiloan,
                    setrika, atau ekspres.
                  </p>
                </div>
              </li>
              <li className="border-l-2 px-4 py-2 border-dark relative">
                <div>
                  <h4 className="text-lg font-semibold">
                    <IoMdArrowDroprightCircle className="absolute -ml-[27px] bg-white mt-1" />
                    Hubungi Kami via WhatsApp
                  </h4>
                  <p className="text-base text-dark/60">
                    Klik tombol &quot;Pesan Sekarang&quot; dan kirim lokasi +
                    jenis cucianmu.
                  </p>
                </div>
              </li>
              <li className="border-l-2 px-4 py-2 border-dark relative">
                <div>
                  <h4 className="text-lg font-semibold">
                    <IoMdArrowDroprightCircle className="absolute -ml-[27px] bg-white mt-1" />
                    Kami Jemput Cucianmu
                  </h4>
                  <p className="text-base text-dark/60">
                    Tim kami datang menjemput langsung ke rumah atau kos kamu.
                    GRATIS!
                  </p>
                </div>
              </li>
              <li className="border-l-2 px-4 py-2 border-dark relative">
                <div>
                  <h4 className="text-lg font-semibold">
                    <IoMdArrowDroprightCircle className="absolute -ml-[27px] bg-white mt-1" />
                    Proses Laundry Profesional
                  </h4>
                  <p className="text-base text-dark/60">
                    Pakaian dicuci, dikeringkan, disetrika, dan diberi pewangi
                    premium.
                  </p>
                </div>
              </li>
              <li className="border-l-2 px-4 py-2 border-dark relative">
                <div>
                  <h4 className="text-lg font-semibold">
                    <IoMdArrowDroprightCircle className="absolute -ml-[27px] bg-white mt-1" />
                    Kami Antar Kembali
                  </h4>
                  <p className="text-base text-dark/60">
                    Cucianmu akan diantar rapi dan wangi, tepat waktu.
                  </p>
                </div>
              </li>
            </ul>
            <div className="my-8">
              <h6 className="text-lg">
                Gak perlu ribet keluar rumah, tinggal klik tombol. Semua beres —
                cepat, bersih, wangi!
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSystem;
