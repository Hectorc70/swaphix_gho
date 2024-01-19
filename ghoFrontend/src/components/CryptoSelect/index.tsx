/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


const formatCryptoOptionLabel = ({ label, iconUrl }:any) => (
  <div className="flex flex-row items-center mt-2">
    <div className="w-5 h-5 ml-2">
      <img src={iconUrl} alt={label + ' cryto ' + 'swaphix'} className="w-5 h-5" />
    </div>
    <div className="font-bold text-onGlobal text-sm ml-1">{label}</div>
  </div>
);


export const colourStyles = {
  control: (styles: any) => ({
      ...styles,
      color: 'white',
      backgroundColor: '#FFFFFF',
      '&:hover': {
          border: '2px solid #B13CFF', // Cambia el color del borde en hover
      },
      '&:focus': {
          border: '2px solid #B13CFF', // Cambia el color del borde en focus
      },
      '&::before': {
        border: '2px solid #B13CFF',  //
      },
      borderRadius: '10px',
      border: '2px solid #B13CFF',
      maxWidth: '150px',
      minWidth: '150px',
      '-webkit-appearance': 'none',
  }),
  option: (
      { isDisabled}: any
  ) => {
      // const color = chroma(data.color);
      return {
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          color: 'white',
          cursor: isDisabled ? 'not-allowed' : 'default',
      };
  },
  menu: () => ({
      borderRadius: '10px',
      color: 'white',
      backgroundColor: '#FFFFFF', // Cambia el color de fondo del menú
      border: '2px solid #B13CFF', // Cambia el borde del menú
      zIndex: 99999, 
      transition: 'all 300ms ease-in-out',
  }),
};

export default formatCryptoOptionLabel;