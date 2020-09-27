import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
  }
  body{
    background-color: #eee;
  }

  body, #root{
    height: 100%;
    width: 100%;
  }
  body, #root, input, button{
    font-family: 'Roboto', sans-serif;
  }
`;