"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
      })
      .catch(() => {
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="bg-light  flex items-center justify-center px-10 md:px-24">
        <div className="w-full flex flex-col  max-w-7xl py-10 z-30">
          <h1 className="text-2xl font-semibold text-dark">Hubungi Kami</h1>
          <div>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 mt-8">
              <input
                type="text"
                name="name"
                placeholder="Masukkan Nama"
                required
                className="w-full border p-2 border-dark text-dark rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                required
                className="w-full border p-2 border-dark text-dark rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Masukkan Pesan"
                required
                className="w-full border p-2 border-dark text-dark rounded-lg h-32"
              />
              <button
                type="submit"
                className="bg-primary text-secondary hover:border-primary border px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-all ease-in-out duration-150 cursor-pointer"
                disabled={loading}
              >
                {loading ? "Mengirim..." : "Kirim"}
              </button>

              {success === true && (
                <p className="text-green-500">Pesan Terkirim</p>
              )}
              {success === false && (
                <p className="text-red-500">Gagal Mengirim Pesan</p>
              )}
            </form>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-semibold text-dark">
              Cara lain untuk menghubungi
            </h1>
            <Link
              href={"mailto:rrqlemkn@gmail.com"}
              className="flex gap-4 items-center my-4 hover:shadow-2xl hover:p-2 rounded-lg transition-all ease-in-out duration-150"
            >
              <div className="bg-dark/20 p-2 rounded-lg">
                <MdEmail className="text-dark text-4xl" />
              </div>
              <div className="text-dark">
                <h1 className="font-bold">Email</h1>
                <p className="text-dark/30">rrqlemkn@gmail.com</p>
              </div>
            </Link>
            <Link
              href={"https://wa.me/085945868265"}
              className="flex gap-4 items-center my-4 hover:shadow-2xl hover:p-2 rounded-lg transition-all ease-in-out duration-150"
            >
              <div className="bg-dark/20 p-2 rounded-lg">
                <IoLogoWhatsapp className="text-dark text-4xl" />
              </div>
              <div className="text-dark">
                <h1 className="font-bold">WhatsApp</h1>
                <p className="text-dark/30">0859 4586 8265</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
