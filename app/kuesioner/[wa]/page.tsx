import axios from 'axios';
import Typeform from './client';

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

  return (
    <>
      <title>Isi kuesioner Kudoku</title>
      <div className="flex flex-col h-screen w-full font-inter mt-2">
        <Typeform
          wa={wa}
          firstname={kudos.firstname}
          lastname={kudos.lastname}
          email={kudos.email}
          kudosno={kudos.id.toString()}
        />
      </div>
    </>
  );
}
