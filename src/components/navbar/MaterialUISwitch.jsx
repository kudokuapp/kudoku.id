import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#2C5EA8',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="9" width="15" viewBox="0 0 15 9"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M0.0566406 8.99973V0.272461H5.32369V1.20996H1.11346V4.15882H5.05096V5.09632H1.11346V8.06223H5.39187V8.99973H0.0566406Z"/><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M14.149 0.272461V8.99973H13.1262L8.37056 2.14746H8.28533V8.99973H7.22852V0.272461H8.25124L13.024 7.14178H13.1092V0.272461H14.149Z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#2C5EA8'
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: "#001A40",
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="9" width="11" viewBox="0 0 11 9"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M1.11346 0.272461V8.99973H0.0566406V0.272461H1.11346Z"/><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M5.9256 8.99973H3.23242V0.272461H6.04492C6.89151 0.272461 7.61595 0.447177 8.21822 0.796609C8.82049 1.1432 9.28214 1.64178 9.60316 2.29235C9.92418 2.94007 10.0847 3.71564 10.0847 4.61905C10.0847 5.52814 9.92276 6.31081 9.5989 6.96706C9.27504 7.62047 8.80344 8.12331 8.18413 8.47559C7.56481 8.82502 6.81197 8.99973 5.9256 8.99973ZM4.28924 8.06223H5.85742C6.57901 8.06223 7.17702 7.92303 7.65146 7.64462C8.12589 7.36621 8.47958 6.9699 8.71254 6.4557C8.94549 5.9415 9.06197 5.32928 9.06197 4.61905C9.06197 3.91451 8.94691 3.30797 8.7168 2.79945C8.48668 2.28809 8.14293 1.89604 7.68555 1.62331C7.22816 1.34774 6.65856 1.20996 5.97674 1.20996H4.28924V8.06223Z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#2C5EA8',
      borderRadius: 20 / 2,
    },
  }));