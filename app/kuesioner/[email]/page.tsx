import axios from 'axios';
import Typeform from './client';

async function fetchUser(email: string) {
  let result: any;
  const host =
    process.env.NODE_ENV === 'production'
      ? 'https://kudoku.id'
      : 'http://localhost:3000';

  const url = new URL('/api/postgres/checkkudos', host);
  try {
    const { data } = await axios.post(url.href, {
      email,
    });
    result = data;
  } catch (e) {
    console.error(e);
  }

  return result;
}

export default async function Page({ params }: any) {
  const { email } = params;

  const kudos = await fetchUser(email);

  return (
    <>
      <title>Isi kuesioner Kudoku</title>
      <div className="flex flex-col h-screen w-full font-inter mt-2">
        <Typeform
          wa={kudos.whatsapp}
          firstname={kudos.firstname}
          lastname={kudos.lastname}
          email={email}
          kudosno={kudos.id.toString()}
        />
      </div>
    </>
  );
}
