'use client';
import Link from 'next/link';
import '$styles/globals.css';

export default function Page() {
  return (
    <>
      <title>Imprint</title>
      <div className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin] mt-10">
        <section className="h-max lg:mx-6 md:mb-16 mb-8 mt-8">
          <div className="card-main lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8 bg-gradient-to-br from-primary to-onPrimaryContainer">
            <h1 className="text-onPrimary sm:text-6xl text-4xl font-bold mb-12">
              Imprint
            </h1>
            <h2 className="text-onPrimary sm:text-3xl text-2xl font-[500] mb-12">
              PT. Kudoku Finansial Indonesia
            </h2>
            <h6 className="text-onPrimary text-2xl font-[500]">
              Alamat Perusahaan
            </h6>
            <p className="mb-4 text-onPrimary font-light">
              Bellezza BSA Lantai 1 Unit 106, Jl. letjen Soepeno, RT/RW:
              004/002, Kelurahan: Grogol Utara, Kecamatan: Kebayoran Lama, Kota:
              Jakarta Selatan, Provinsi: DKI Jakarta, Kode Pos: 12210
            </p>

            <h6 className="text-onPrimary text-2xl font-[500]">
              Nomor Registrasi Perusahaan
            </h6>
            <p className="mb-4 text-onPrimary font-light">
              AHU-0215866.AH.01.11
            </p>

            <h6 className="text-onPrimary text-2xl font-[500]">NPWP</h6>
            <p className="mb-4 text-onPrimary">53.534.858.5-013.000</p>

            <h6 className="text-onPrimary text-2xl font-[500]">
              Direktur Utama
            </h6>
            <p className="mb-4 text-onPrimary font-light">Furqon Wilogo</p>

            <h6 className="text-onPrimary text-2xl font-[500]">
              Komisaris Utama
            </h6>
            <p className="mb-4 text-onPrimary font-light">
              Prof. Dr. dr. Fachmi Idris, M.Kes
            </p>

            <h6 className="text-onPrimary text-2xl font-[500]">
              E-mail Perusahaan
            </h6>
            <Link href="mailto:business@kudoku.id" className="no-underline">
              <p className="text-onPrimary font-light cursor-pointer">
                business@kudoku.id
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
