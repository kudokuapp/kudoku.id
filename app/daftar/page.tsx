'use client';
import { Widget } from '@typeform/embed-react';

const Typeform = ({ wa }: { wa: any }) => {
  return (
    <Widget
      id="EnKbwQJL"
      style={{ width: '100%', height: '100%' }}
      hidden={{
        index: '1',
        wa: `${wa}`,
      }}
      className="my-form"
    />
  );
};

export default function Page({
  // eslint-disable-next-line no-unused-vars
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { wa: string };
}) {
  return (
    <>
      <title>Daftar jadi Kudos</title>
      <div className="flex flex-col h-screen w-full font-inter mt-2">
        <Typeform wa={searchParams.wa} />
      </div>
    </>
  );
}
