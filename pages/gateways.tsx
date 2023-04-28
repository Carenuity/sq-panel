import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import GatewayItem from '../components/GatewayItem';

const Gateways = () => {
  return (
    <>
      <Head>
        <title>{'Gateways'}</title>
      </Head>

      <PageTitle
        title='My Gateways'
        path={[{ url: '/', name: 'My Gateways' }]}
      />
      {/* End Page Title */}
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='card px-3'>
                <h5 className='card-title'>Sammury</h5>

                <div className='card-body  table-responsive'>
                  <table className='table table-hover'>
                    <thead className='bg-success text-white'>
                      <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Gateway</th>
                        <th scope='col'>Home</th>
                        <th scope='col'>Thread Net (Hz)</th>
                        <th scope='col'>Hardware Version</th>
                        <th scope='col'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <GatewayItem
                        index={1}
                        name={'NN'}
                        home={'Apartment'}
                        threadFrequency={1500}
                        hardwareVersion={'v3.0.9'}
                      />
                      <GatewayItem
                        index={1}
                        name={'NN'}
                        home={'Apartment'}
                        threadFrequency={1500}
                        hardwareVersion={'v3.0.9'}
                      />
                      <GatewayItem
                        index={1}
                        name={'NN'}
                        home={'Apartment'}
                        threadFrequency={1500}
                        hardwareVersion={'v3.0.9'}
                      />
                      <GatewayItem
                        index={1}
                        name={'NN'}
                        home={'Apartment'}
                        threadFrequency={1500}
                        hardwareVersion={'v3.0.9'}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gateways;
