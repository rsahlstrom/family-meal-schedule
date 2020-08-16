import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    ${tw`text-red-600`}

    &:hover,
    &:focus {
      ${tw`text-red-700 font-semibold`}
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <main tw="mx-auto max-w-screen-sm py-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
