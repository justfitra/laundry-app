import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="w-full flex justify-center items-center">
          <ul
            className={`justify-between items-center max-w-7xl w-full sm:px-40 font-medium hidden sm:flex `}
          >
            <li>
              <Link href="#home">Beranda</Link>
            </li>

            <li>
              <Link href="#services"> Layanan</Link>
            </li>

            <li>
              <Link href="#worksystem">Cara Kerja</Link>
            </li>

            <li>
              <Link href="#pircing">Harga</Link>
            </li>

            <li>
              <Link href="#contact">Hubungi Kami</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-6 my-4">
          <MdEmail className="text-light text-2xl" />
          <IoLogoWhatsapp className="text-light text-2xl" />
        </div>
        <p className="text-">
          &copy; {new Date().getFullYear()} Solusi cuci pakaian cepat & praktis.
        </p>
        <ul className="text-sm my-6">
          <li>📍 Alamat: Jl. Melati No. 23, Trenggalek </li>
          <li>📞 WhatsApp: 08xx-xxxx-xxxx </li>
          <li>📧 Email: laundryapp@email.com</li>
        </ul>
        <p className="text-sm">
          Temukan kami di Instagram & TikTok: @laundryapp.id
        </p>
      </div>
    </footer>
  );
};

export default Footer;
