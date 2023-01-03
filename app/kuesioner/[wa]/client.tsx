'use client';

import { Widget } from '@typeform/embed-react';
import { useRouter } from 'next/navigation';

export default function Typeform({
  wa,
  firstname,
  lastname,
  email,
  kudosno,
}: {
  wa: any;
  firstname: string;
  lastname: string;
  email: string;
  kudosno: string;
}) {
  const router = useRouter();
  return (
    <Widget
      id="XcJ2iwfQ"
      style={{ width: '100%', height: '100%' }}
      hidden={{
        index: '1',
        wa: `${wa}`,
        firstname,
        lastname,
        email,
        kudosno,
      }}
      className="my-form"
      onSubmit={() => {
        router.push(`/queue/${wa}`);
      }}
    />
  );
}
