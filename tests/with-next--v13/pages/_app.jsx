import "../styles/globals.css";
import PropTypes from "prop-types";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};

export default MyApp;
