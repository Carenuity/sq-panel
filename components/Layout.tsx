import Link from 'next/link';
import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      {!children.props.auth && <Header />}
      {/* <!-- End Header --> */}

      {/* <!-- ======= Sidebar ======= --> */}
      {!children.props.auth && <Sidebar />}
      {/* <!-- End Sidebar--> */}

      {children.props.auth && <main>{children}</main>}

      {!children.props.auth && (
        <main id='main' className='main'>
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

export default Layout