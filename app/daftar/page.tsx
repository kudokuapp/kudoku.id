'use client';
import { Widget } from '@typeform/embed-react';
import { useRouter, useSearchParams } from 'next/navigation';

const Typeform = ({
  wa,
  handleSubmit,
}: {
  wa: any;
  handleSubmit: () => void;
}) => {
  return (
    <Widget
      id="EnKbwQJL"
      style={{ width: '100%', height: '100%' }}
      hidden={{
        index: '1',
        wa: `${wa}`,
      }}
      className="my-form"
      onSubmit={handleSubmit}
    />
  );
};

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const wa = searchParams.get('wa');

  return (
    <>
      <title>Daftar jadi Kudos</title>
      <div className="flex flex-col h-screen w-full font-inter mt-2">
        <Typeform
          wa={wa}
          handleSubmit={() => {
            router.push(`/kuesioner/${wa}`);
          }}
        />
      </div>
    </>
  );
}
