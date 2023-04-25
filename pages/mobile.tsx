import React from 'react';
import PageTitle from '../components/PageTitle';

const mobile = () => {
  return (
    <>
      <section className='section dashboard'>
        <div className='row'>
          <div className='col-lg-12'>
            <PageTitle
              title='Mobile App'
              path={[{ url: '/mobile', name: 'Mobile App' }]}
            />
          </div>
          <div className='col-lg-12'>
            <div
              className='card' 
              style={{
                height: '100vh',
                width: '90vw',
              }}
            >
              <div className='card-body pt-3'>
                <iframe
                  className='w-100 h-100'
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                  // width='800'
                  // height='450'
                  src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUWPA6fX154wJeOB6M2iOI9%2FCarenuty-SOW_DH%3Fpage-id%3D260%253A29%26node-id%3D290-7519%26viewport%3D131%252C933%252C0.23%26scaling%3Dscale-down%26starting-point-node-id%3D290%253A7519%26show-proto-sidebar%3D1'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default mobile;
