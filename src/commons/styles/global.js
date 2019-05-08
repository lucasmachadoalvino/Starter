import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  };
  a {
    text-decoration: none;
  };
  input {
    height: 80px;
    border-radius: 10px;
    border: solid 1px ${({ theme }) => theme.palette.border.main};
    outline: none;
    padding: 0 60px 0 25px;
    box-sizing: border-box;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    transition: all ease 0.15s;
    font-weight: 600;
    &::placeholder {
      color: ${({ theme }) => theme.palette.secondary.light};
      font-size: 16px;
      font-weight: 500;
    }
    &:focus {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -10px rgba(0,0,0,.05);
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  ::-webkit-scrollbar {
      -webkit-appearance: none;
  }

  ::-webkit-scrollbar:vertical {
      width: 12px;
  }

  ::-webkit-scrollbar:horizontal {
      height: 12px;
  }

  ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, .5);
      border-radius: 10px;
      border: 2px solid #ffffff;
  }

  ::-webkit-scrollbar-track {
      border-radius: 10px;  
      background-color: #ffffff; 
  }
`;

export default globalStyle;
