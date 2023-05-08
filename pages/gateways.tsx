import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const GatewayItem = dynamic(() => import('../components/GatewayItem'), {
  ssr: false,
  loading: () => (
    <tr>
      <th scope='row '>{'Loading..'}</th>
      <td className='text-nowrap'>{'Loading..'}</td>
      <td className='text-nowrap'>{'Loading..'}</td>
      <td className='text-nowrap'>{'Loading..'} Hz</td>
      <td className='text-nowrap'>{'Loading..'}</td>
      <td className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-sm btn-white mx-2'>
          <i className='bi bi-trash-fill text-danger'></i>
        </button>
        <button
          className='btn btn-sm btn-white'
          data-bs-toggle='modal'
          data-bs-target='#verticalycentered'
        >
          <i className='bi bi-three-dots-vertical text danger'></i>
        </button>
      </td>
    </tr>
  ),
});

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
