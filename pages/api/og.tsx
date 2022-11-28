import { ImageResponse } from '@vercel/og';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(
  new URL(
    '../../public/fonts/TTInterfaces/TTInterfaces-Bold.ttf',
    import.meta.url
  )
).then((res) => res.arrayBuffer());

export default async function handler(
  req: NextApiRequest,
  // eslint-disable-next-line no-unused-vars
  res: NextApiResponse
) {
  const { searchParams } = new URL(req.url as string);
  const firstName = searchParams.get('firstName');
  const kudosNo = searchParams.get('kudosNo');

  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#E1E1E1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '61px',
            top: '61px',
            display: 'flex',
          }}
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_630_11935)">
              <path
                d="M3.46354 1.09375L3.83672 0.889624C4.19493 0.693681 4.56906 0.528341 4.9551 0.395367C5.71501 0.13361 6.51315 0 7.31688 0H62.474C63.0404 0 63.6061 0.0404958 64.1667 0.121178L65.0856 0.389429C65.4445 0.494181 65.7932 0.630974 66.1276 0.798156L66.1843 0.826517C66.5396 1.00418 66.8752 1.21887 67.1854 1.46704C67.4812 1.70369 67.7524 1.96954 67.9949 2.26056L68.5417 2.91667L69.1488 3.88799C69.351 4.21152 69.5141 4.55789 69.6347 4.91983C69.7563 5.28447 69.8338 5.66233 69.8658 6.04536L69.8969 6.41851C69.9652 7.23869 69.9058 8.06452 69.7207 8.86648L69.6262 9.27613C69.5114 9.77339 69.3245 10.2512 69.0713 10.6943C68.8408 11.0977 68.5575 11.4686 68.2289 11.7971L67.6302 12.3958L40.2865 33.5417L39.6586 34.0126C39.1071 34.4262 38.5062 34.7695 37.8699 35.0347L37.6535 35.1249C36.9825 35.4044 36.2648 35.5758 35.5401 35.6315C34.7062 35.6957 33.8601 35.6053 33.0593 35.3637C32.4123 35.1685 31.7982 34.8775 31.2374 34.5004L30.625 34.0885L2.91667 12.7604L2.20159 12.0453C1.94946 11.7932 1.71554 11.5235 1.5016 11.2382L1.32679 11.0052C0.931242 10.4778 0.628006 9.88709 0.429989 9.25828C0.323504 8.92013 0.248085 8.57298 0.204668 8.22112L0.133508 7.64445C0.0451545 6.92843 0.0799838 6.20257 0.236488 5.4983C0.3217 5.11485 0.442455 4.74017 0.597188 4.37913L0.911458 3.64583L1.09079 3.34695C1.3349 2.9401 1.62798 2.56473 1.96348 2.22923C2.23369 1.95901 2.52994 1.71615 2.8479 1.50418L3.46354 1.09375Z"
                fill="#348A95"
              />
              <path
                d="M0.0990407 6.13476L0 6.92708V61.7839C0 62.6422 0.0609168 63.4993 0.182292 64.349L0.405742 65.131C0.499628 65.4596 0.623787 65.7788 0.776623 66.0845C0.987178 66.5056 1.25067 66.8981 1.56071 67.2524L2.01921 67.7764C2.25247 68.043 2.50891 68.2884 2.78552 68.5097C3.11509 68.7733 3.47158 69.0014 3.84907 69.1902L3.96098 69.2461C4.23665 69.3839 4.52175 69.502 4.81413 69.5995C5.24933 69.7446 5.69863 69.8433 6.15455 69.8939L7.10938 70H61.9641C62.702 70 63.4387 69.939 64.1667 69.8177L64.9193 69.5919C65.6283 69.3792 66.2986 69.0545 66.905 68.6301L66.9385 68.6066C67.5175 68.2013 68.0286 67.7067 68.4526 67.1413C68.7541 66.7394 69.0093 66.3047 69.2133 65.8456L69.2745 65.7079C69.5144 65.1682 69.6939 64.6036 69.8097 64.0244L69.8177 63.9844L69.928 62.9921C69.9758 62.5619 69.9639 62.1272 69.8928 61.7003C69.8428 61.4008 69.764 61.1069 69.6574 60.8226L69.2708 59.7917C68.7879 58.8258 68.1524 57.944 67.3888 57.1804L67.0833 56.875L12.6757 2.46742C12.2466 2.03829 11.7876 1.64017 11.3021 1.27604L10.3906 0.729167C9.54455 0.366563 8.64966 0.130633 7.73478 0.0289805L7.47396 0H7.13171C6.75288 0 6.37471 0.031299 6.00104 0.0935774L5.9715 0.0985001C5.63685 0.154275 5.30708 0.236182 4.98522 0.343468C4.5794 0.478742 4.18793 0.653771 3.81652 0.866007L3.09896 1.27604L2.98851 1.35888C2.57655 1.66785 2.18704 2.00567 1.82292 2.36979L1.55095 2.70975C1.247 3.08969 0.981546 3.50566 0.763949 3.94085C0.620508 4.22773 0.495969 4.52772 0.394541 4.832C0.253387 5.25547 0.154406 5.69184 0.0990407 6.13476Z"
                fill="#345995"
              />
            </g>
            <defs>
              <clipPath id="clip0_630_11935">
                <rect width="70" height="70" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '50px',
            maxWidth: '1000px',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 60,
            fontWeight: 900,
            lineHeight: 1.4,
            fontFamily: 'TTInterfaces',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: 'auto',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(90deg, #2c5ea8, #348a95)',
              backgroundClip: 'text',
              //@ts-ignore
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}
          >
            Kamu diundang jadi Kudos
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: '1000px',
              textAlign: 'center',
              color: 'black',
              fontSize: 50,
            }}
          >
            sama
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: 'auto',
              maxWidth: '1000px',
              textAlign: 'center',
              backgroundImage:
                'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
              backgroundClip: 'text',
              //@ts-ignore
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}
          >
            {firstName} (Kudos No. {kudosNo})
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'TTInterfaces',
          data: fontData,
        },
      ],
    }
  );
}
