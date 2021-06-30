import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { FC } from 'react';

const Wrapper: FC = () => {
  return (
    <body className='bg-gray-50 dark:bg-black'>
      <Main />
      <NextScript />
    </body>
  );
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className='dark'>
        <Head />
        <Wrapper />
      </Html>
    );
  }
}

export default MyDocument;
