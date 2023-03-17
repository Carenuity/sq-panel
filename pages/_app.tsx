import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (document !== undefined) {
      require('../utils/vendor/apexcharts/apexcharts.min.js');
      require('../utils/vendor/bootstrap/js/bootstrap.bundle.min.js');
      require('../utils/vendor/chart.js/chart.min.js');
      require('../utils/vendor/echarts/echarts.min.js');
      require('../utils/vendor/quill/quill.min.js');
      require('../utils/vendor/simple-datatables/simple-datatables.js');
      require('../utils/vendor/tinymce/tinymce.min.js');
      require('../utils/vendor/php-email-form/validate.js');
      require('../utils/js/main.js');
    }
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
