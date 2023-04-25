import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

const Index = ({auth}: {auth: boolean}) => {
  return (
    <>
      <section className='section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4'>
        <div className='container'>
          <section className='section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
            <div className='card mb-3'>
              <div className='card-body'>
                <h1>404</h1>
                <h2>The page you are looking for doesn&apos;t exist.</h2>
                <Link className='btn' href='/'>
                  Back to home
                </Link>
                {/* <Image src={notFoundImage} className="img-fluid py-5" alt="Page Not Found" /> */}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
 return {
  props: {
   auth: true
  }
 }
}

export default Index