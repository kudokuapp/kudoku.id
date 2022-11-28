'use client';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faCloud,
  faPlane,
  faEye,
  faLock,
  faCircleInfo,
  faClipboard,
  faBuildingColumns,
  faVault,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <title>Keamanan Aplikasi Kudoku</title>
      <main className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
        <Header />
        <Card />
        <Bottom />
      </main>
    </>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-center gap-0">
      <svg
        width="292"
        height="310"
        viewBox="0 0 292 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_di_97_302)">
          <path
            d="M127.429 117.188V131.25H174.571V117.188C174.571 104.238 164.023 93.75 151 93.75C137.977 93.75 127.429 104.238 127.429 117.188ZM108.571 131.25V117.188C108.571 93.8965 127.576 75 151 75C174.424 75 193.429 93.8965 193.429 117.188V131.25H198.143C208.544 131.25 217 139.658 217 150V206.25C217 216.592 208.544 225 198.143 225H103.857C93.4563 225 85 216.592 85 206.25V150C85 139.658 93.4563 131.25 103.857 131.25H108.571Z"
            fill="white"
          />
        </g>
        <g clipPath="url(#clip0_97_302)" filter="url(#filter1_d_97_302)">
          <path
            d="M128.433 156.345L128.7 156.2C128.957 156.06 129.225 155.942 129.501 155.848C130.045 155.661 130.615 155.566 131.19 155.566H170.659C171.064 155.566 171.469 155.595 171.87 155.653L172.528 155.844C172.785 155.918 173.034 156.015 173.273 156.134L173.315 156.155C173.569 156.281 173.808 156.434 174.03 156.61C174.242 156.778 174.436 156.968 174.61 157.176L175.001 157.642L175.436 158.333C175.58 158.563 175.697 158.809 175.783 159.067C175.87 159.326 175.925 159.595 175.948 159.868L175.971 160.133C176.019 160.717 175.977 161.304 175.845 161.875L175.777 162.165C175.695 162.52 175.561 162.86 175.379 163.176C175.215 163.463 175.012 163.726 174.778 163.959L174.349 164.386L154.783 179.431L154.335 179.765C153.939 180.06 153.508 180.305 153.052 180.494L152.899 180.557C152.419 180.756 151.904 180.878 151.386 180.918C150.79 180.964 150.184 180.899 149.612 180.728C149.148 180.589 148.708 180.381 148.306 180.112L147.869 179.82L128.042 164.645L127.53 164.136C127.35 163.957 127.183 163.766 127.03 163.563L126.904 163.395C126.621 163.021 126.404 162.601 126.263 162.154C126.187 161.913 126.133 161.666 126.101 161.415L126.051 161.006C125.987 160.496 126.012 159.979 126.124 159.478C126.185 159.206 126.272 158.939 126.382 158.683L126.607 158.16L126.735 157.949C126.91 157.659 127.12 157.391 127.36 157.152C127.554 156.96 127.765 156.788 127.992 156.637L128.433 156.345Z"
            fill="#44474F"
          />
          <path
            d="M126.026 159.932L125.955 160.495V199.525C125.955 200.136 125.999 200.746 126.086 201.35L126.245 201.906C126.313 202.14 126.402 202.368 126.511 202.586C126.662 202.885 126.85 203.164 127.071 203.415L127.399 203.788C127.567 203.978 127.75 204.153 127.949 204.311C128.184 204.498 128.439 204.66 128.708 204.794L129.086 204.982C129.606 205.154 130.143 205.272 130.688 205.332L131.042 205.371H170.294C170.822 205.371 171.349 205.328 171.87 205.241L172.411 205.08C172.917 204.929 173.395 204.699 173.829 204.397L173.856 204.378C174.269 204.091 174.633 203.74 174.937 203.338C175.153 203.051 175.336 202.741 175.482 202.414L175.525 202.318C175.697 201.933 175.825 201.531 175.908 201.118L175.914 201.091L175.993 200.385C176.027 200.079 176.019 199.77 175.968 199.466C175.932 199.253 175.876 199.044 175.799 198.842L175.523 198.108C175.177 197.421 174.723 196.794 174.177 196.251L173.957 196.033L135.026 157.322C134.718 157.017 134.39 156.733 134.042 156.474L133.39 156.085C132.785 155.827 132.145 155.659 131.491 155.587L131.303 155.566H131.058C130.787 155.566 130.517 155.589 130.249 155.633L130.228 155.637C129.988 155.676 129.753 155.734 129.523 155.811C129.232 155.907 128.952 156.032 128.685 156.183L128.173 156.474L128.093 156.534C127.799 156.753 127.52 156.993 127.259 157.253L127.064 157.495C126.847 157.765 126.657 158.061 126.502 158.37C126.399 158.574 126.31 158.788 126.237 159.004C126.136 159.306 126.066 159.616 126.026 159.932Z"
            fill="#1A1B1F"
          />
        </g>
        <defs>
          <filter
            id="filter0_di_97_302"
            x="0"
            y="0"
            width="292"
            height="310"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-5" dy="5" />
            <feGaussianBlur stdDeviation="40" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_97_302"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_97_302"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_97_302"
            />
          </filter>
          <filter
            id="filter1_d_97_302"
            x="99.9551"
            y="145.566"
            width="102.089"
            height="101.805"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_97_302"
            />
            <feOffset dy="16" />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_97_302"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_97_302"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_97_302">
            <rect
              width="50.0893"
              height="49.8047"
              fill="white"
              transform="translate(125.955 155.566)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="flex flex-col items-center m-0 gap-12">
        <h1 className="gradient-text-new m-0 md:text-6xl text-4xl leading-snug">
          Siap Lapor 24/7
        </h1>
        <div className="flex flex-col items-center m-0 max-w-[800px] gap-8">
          <p className="text-center font-base md:text-2xl text-xl m-0">
            Ketika kita ngomongin fintek (finansial teknologi), keamanan
            aplikasi gabisa dipikirin di akhir. Keamanan harus menjadi jantung
            dan tulang punggung aplikasi tersebut dari awal.
          </p>
          <p className="text-center font-base md:text-2xl text-xl m-0">
            Dan di Kudoku, kemanan menjadi prioritas kita nomor satu. Dibawah
            ini lo bisa liat beberapa cara kita untuk memastikan data lo 100%
            aman.
          </p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  const data = [
    {
      faIcon: faCoffee,
      color: 4,
      classTambahan: 'h-fit',
      heading: `Kamu adalah tanggung jawab kami`,
      children: (
        <p className="text-onPrimary text-lg">
          Kami berkomitmen untuk membuat Kudoku secara transparan. Yang dimaksud
          transparan, kami menjunjung tinggi pertanggung jawaban kepada kamu
          sebagai kustomer Kudoku. Kami secara teratur membagikan perjalanan
          kami membangun Kudoku melalui website kami, update mingguan melalui
          email, Linkedin, serta Twitter Kudoku.
        </p>
      ),
    },
    {
      faIcon: faLock,
      color: 5,
      classTambahan: 'h-full',
      heading: `Enkripsi data yang bisa kamu percayai`,
      children: (
        <p className="text-onPrimary text-lg">
          Semua data yang kamu punya akan di enkripsi menggunakan spesifikasi
          AES (The Advanced Encryption Standard). Walaupun ada hacker
          (amit-amit), mereka gak akan bisa baca data-data kamu.
        </p>
      ),
    },
    {
      faIcon: faCircleInfo,
      color: 6,
      classTambahan: 'h-full',
      heading: `Aplikasi yang menghargai privasi kamu`,
      children: (
        <p className="text-onPrimary text-lg">
          Setiap data yang Kudoku ambil dari kamu (mulai dari cookies, data
          transaksi, data asset kamu, dan data-data lainnya), gak akan pernah
          bisa dikaitkan sama kamu. Jadi jangan khawatir, semua data-data kamu
          itu kita gak pernah tau kalo itu data kamu, walaupun dari pihak Kudoku
          sendiri.
        </p>
      ),
    },
    {
      faIcon: faClipboard,
      color: 7,
      classTambahan: 'h-full',
      heading: `Legalitas yang jelas`,
      children: (
        <p className="text-onPrimary text-lg">
          Kudoku terdaftar sebagai entitas PT. Kudoku Finansial Indonesia dengan
          nomor registrasi AHU-0215866.AH.01.11. Kami juga terdaftar di KOMINFO
          sebagai Penyelenggara Sistem Elektronik (PSE). Kami juga lagi proses
          registrasi untuk masuk ke grup FinTech Indonesia.
        </p>
      ),
    },
    {
      faIcon: faBuildingColumns,
      color: 8,
      classTambahan: 'h-full',
      heading: `Keamanan login setara bank`,
      children: (
        <p className="text-onPrimary text-lg">
          Kami menggunakan standar Auth0 untuk autorisasi dan autentikasi login
          kamu. Auth0 adalah standar autentikasi dan autorisasi yang dipakai di
          bank-bank besar, institusi kesehatan, dan perusahaan publik.
        </p>
      ),
    },
    {
      faIcon: faVault,
      color: 9,
      classTambahan: 'h-fit',
      heading: `Berkomitmen untuk melindungi data kamu`,
      children: (
        <p className="text-onPrimary text-lg">
          Kami sadar bahwa perusahaan teknologi besar pun rawan akan adanya
          peretas (hacker). Maka dari itu, data finansial dan data personal
          telah kita buat di database yang berbeda untuk mengurangi dampak
          negatif dari peretasan sukses.
        </p>
      ),
    },

    {
      faIcon: faPlane,
      color: 2,
      classTambahan: 'h-fit',
      heading: `Kami tidak menjual atau upsell data kamu ke siapapun`,
      children: (
        <>
          <p className="text-onPrimary text-lg">
            Aplikasi dan alat-alat keuangan terkenal dengan menjual datamu
            keorang lain untuk mendapatkan keuntungan. Mereka sering kali
            bertindak sebagai perantara.
          </p>
          <p className="text-onPrimary text-lg">
            Kudoku mendapatkan keuntungan ketika kami sudah sukses membuat
            aplikasi yang membuat kamu berhasil mengelola keuangan kamu. Inilah
            alasannya kenapa kita menerapkan sistem biaya bulanan
            (subscription). Kalo ada aplikasi yang bilang mereka “<i>free</i>”,{' '}
            <i>most likely</i> data kamu akan dijual ke orang lain.
          </p>
          <p className="text-onPrimary text-lg">
            Insentif Kudoku adalah untuk <b>ngebantu kamu</b>, bukan ngebantu
            perusahaan lain.
          </p>
        </>
      ),
    },
    {
      faIcon: faEye,
      color: 3,
      classTambahan: 'lg:h-fit h-full',
      heading: `Tidak ada satupun dari pihak Kudoku yang bisa akses data finansial kamu`,
      children: (
        <>
          <p className="text-onPrimary text-lg">
            Jika ada kejadian yang dimana tim Kudoku membutuhkan akses untuk
            melakukan support (misalnya seperti ngebantuin kamu untuk koneksikan
            akun finansial kamu), kami gabakal akses akun kamu tanpa izin
            tertulis yang explisit dari kamu.
          </p>
          <p className="text-onPrimary text-lg">
            Kami akan <b>selalu</b> minta izin ke kamu.
          </p>
          <p className="text-onPrimary text-lg">
            Tapi tetap, kami akan jadikan keamanan dan privasi kamu prioritas
            nomor satu ketika harus melakukan support.{' '}
          </p>
        </>
      ),
    },
    {
      faIcon: faCloud,
      color: 1,
      classTambahan: 'h-fit',
      heading: `Kami gapernah simpen detil bank credential kamu`,
      children: (
        <p className="text-onPrimary text-lg">
          Kami bekerja sama dengan <i>data aggregator</i> atau{' '}
          <i>data provider</i> seperti <b>Brick</b> dan <b>Brankas</b>, yang
          dimana mereka punya kerjasama bank dan pengalaman bertahun-tahun untuk
          menangani data sensitif.
        </p>
      ),
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-20">
      {data.map((item, index) => {
        return (
          <CardGrid
            key={index}
            faIcon={item.faIcon}
            classTambahan={item.classTambahan}
            color={item.color}
            heading={item.heading}
          >
            {item.children}
          </CardGrid>
        );
      })}
    </div>
  );
}

function CardGrid({
  faIcon,
  classTambahan = 'h-fit',
  color,
  heading,
  children,
}: {
  faIcon: IconProp;
  classTambahan: string;
  color: number;
  heading: string;
  children: JSX.Element;
}) {
  let bgOpacity25, textColor;
  switch (color) {
    case 1:
      bgOpacity25 = 'bg-[#FBF2C0]/25';
      textColor = 'text-[#FBF2C0]';
      break;
    case 2:
      bgOpacity25 = 'bg-[#DA4167]/25';
      textColor = 'text-[#DA4167]';
      break;
    case 3:
      bgOpacity25 = 'bg-[#F0BCD4]/25';
      textColor = 'text-[#F0BCD4]';
      break;
    case 4:
      bgOpacity25 = 'bg-[#4A6C6F]/25';
      textColor = 'text-[#4A6C6F]';
      break;
    case 5:
      bgOpacity25 = 'bg-[#AF5D63]/25';
      textColor = 'text-[#AF5D63]';
      break;
    case 6:
      bgOpacity25 = 'bg-[#AFDEDC]/25';
      textColor = 'text-[#AFDEDC]';
      break;
    case 7:
      bgOpacity25 = 'bg-[#D8CC34]/25';
      textColor = 'text-[#D8CC34]';
      break;
    case 8:
      bgOpacity25 = 'bg-[#33658A]/25';
      textColor = 'text-[#33658A]';
      break;
    case 9:
      bgOpacity25 = 'bg-[#6247AA]/25';
      textColor = 'text-[#6247AA]';
      break;
  }
  return (
    <div
      className={`bg-neutralOnBackground px-8 py-10 w-fit ${classTambahan} rounded-2xl`}
    >
      <div className={`${bgOpacity25} w-fit h-fit p-4 rounded-2xl`}>
        <FontAwesomeIcon className={`${textColor} text-4xl`} icon={faIcon} />
      </div>
      <h6 className="text-3xl text-onPrimary font-bold my-4">{heading}</h6>
      <div>{children}</div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="w-full flex flex-col items-center gap-8 my-20">
      <div className="bg-primary bg-opacity-25 w-fit h-fit p-6 rounded-full">
        <FontAwesomeIcon className="text-primary text-4xl" icon={faQuestion} />
      </div>
      <h6 className="sm:text-5xl text-4xl gradient-text-new font-bold text-center leading-snug">
        Punya pertanyaan?
      </h6>
      <div className="w-fit h-fit max-w-[700px]">
        <p className="sm:text-3xl text-2xl text-onPrimaryContainer font-base text-center">
          Kalo lo punya pertanyaan, concern, atau saran terkait keamanan, lo
          bisa email kita di{' '}
          <Link href="mailto:business@kudoku.id">
            <button className="text-primary font-bold cursor-pointer animation-mantep hover:text-tertiary">
              business@kudoku.id
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
