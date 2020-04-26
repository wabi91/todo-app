import React from 'react';
import { NextPageContext } from 'next';
import App from 'next/app';
import Head from 'next/head'
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

// NOTE: material-ui setup
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import theme from '../styles/theme';

import store, { Store } from '../store';

interface MyAppProps extends NextPageContext {
  store: Store;
}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>TODO LIST</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default withRedux(store)(MyApp);
