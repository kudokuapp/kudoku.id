import axios from 'axios';
import { redirect } from 'next/navigation';
import Client from './client';

async function fetchUser(whatsapp: string) {
  let result: any;
  const host =
    process.env.NODE_ENV === 'production'
      ? 'https://kudoku.id'
      : 'http://localhost:3000';

  const url = new URL('/api/postgres/checkkudos', host);
  try {
    const { data } = await axios.post(url.href, {
      whatsapp,
    });
    result = data;
  } catch (e) {
    console.error(e);
  }

  return result;
}

export default async function Page({ params }: any) {
  const { wa } = params;

  const kudos = await fetchUser(`+${wa}`);

  const title = `Halo Kudos No. ${kudos.id}`;

  return (
    <>
      {kudos ? (
        <>
          <title>{title}</title>
          <Client data={kudos} />
        </>
      ) : (
        redirect('/')
      )}
    </>
  );
}
