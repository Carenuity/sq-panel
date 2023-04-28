import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { handleMediaQuery } from '../utils/common';

const Layout = ({ children }: { children: any }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (document !== undefined) {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      mediaQuery.addEventListener('change', (e: MediaQueryListEvent) =>
        handleMediaQuery(e.matches, setIsMobile)
      );
      handleMediaQuery(mediaQuery.matches, setIsMobile);
    }
  }, []);

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      {!children.props.auth && <Header isMobile={isMobile} />}
      {/* <!-- End Header --> */}

      {/* <!-- ======= Sidebar ======= --> */}
      {!children.props.auth && <Sidebar />}
      {/* <!-- End Sidebar--> */}

      {children.props.auth && (
        <main
          style={{
            backgroundImage: `url(/assets/img/banner.jpg)`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        >
          {children}
        </main>
      )}

      {!children.props.auth && (
        <main
          id='main'
          className='main'
          style={{
            minHeight: '90vh',
            backgroundImage: `linear-gradient(to bottom right, rgb(202,230,212), #ffffff)`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        >
          {children}
        </main>
      )}
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      {!children.props.auth && <Footer />}
      {/* <!-- End Footer --> */}

      <Link
        href='#'
        className='back-to-top d-flex align-items-center justify-content-center'
      >
        <i className='bi bi-arrow-up-short'></i>
      </Link>
    </>
  );
};

export default Layout;
