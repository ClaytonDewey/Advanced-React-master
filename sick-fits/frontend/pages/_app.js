/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Page from '../components/Page';

const MyApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default MyApp;
