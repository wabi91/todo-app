import { NextPageContext } from 'next';
import withRedux from 'next-redux-wrapper';
import App, { AppInitialProps } from 'next/app';
import Head from 'next/head'
import { Provider } from 'react-redux';

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

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>TODO LIST</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(store)(MyApp);
