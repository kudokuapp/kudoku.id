'use client';
import Client from './client';
import '$styles/globals.css';

export default function Page({
  searchParams,
}: {
  searchParams?: { kudosref: string };
}) {
  console.log(searchParams?.kudosref);
  const kudosref = searchParams?.kudosref ?? null;
  const ref = kudosref ? kudosref.match(/\d+/g) : null;

  const refStr = kudosref ? kudosref.match(/[a-zA-Z]+/g) : null;

  const imgURL =
    ref && refStr
      ? `https://kudoku.id/api/og?firstName=${refStr[0].replace(
          /(^\w{1})|(\s+\w{1})/g,
          (letter) => letter.toUpperCase()
        )}&kudosNo=${ref[0]}`
      : 'https://kudoku.id/meta.png';

  return (
    <>
      <title>Kudoku - Gampang Ngatur Duit</title>
      <meta property="og:image" content={imgURL} />
      <meta name="twitter:image:src" content={imgURL} />
      <meta itemProp="image" content={imgURL} />
      <main className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
        <Client kudosref={kudosref} />
      </main>
    </>
  );
}
