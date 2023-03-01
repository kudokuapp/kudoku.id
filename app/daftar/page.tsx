'use client';
import { Widget } from '@typeform/embed-react';
import { useRouter, useSearchParams, redirect } from 'next/navigation';

const Typeform = ({
  email,
  handleSubmit,
}: {
  email: string;
  handleSubmit: () => void;
}) => {
  return (
    <Widget
      id="e6haAlGW"
      style={{ width: '100%', height: '100%' }}
      hidden={{
        index: '1',
        email,
      }}
      className="my-form"
      onSubmit={handleSubmit}
    />
  );
};

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  if (!email) redirect('/');

  return (
    <>
      <title>Daftar jadi Kudos</title>
      <div className="flex flex-col h-screen w-full font-inter mt-2">
        <Typeform
          email={email}
          handleSubmit={() => {
            setTimeout(() => {
              router.push(`/kuesioner/${email}`);
            }, 2500);
          }}
        />
      </div>
    </>
  );
}
