import React from 'react';
import DeviceListItem from '../../../../components/DeviceListItem';
import PageTitle from '../../../../components/PageTitle';
import { useRouter } from 'next/router';

const Devices = () => {
 const router = useRouter();
 const {homeId, roomId} = router.query;

  return (
    <>
      <section className='section dashboard'>
        <div className='row'>
          <div className='col-lg-12'>
            <PageTitle
              title='Bedroom Devices'
              path={[
                { url: '/homes', name: 'My Homes' },
                { url: `/homes/${homeId}`, name: `Apartment ${homeId}` },
                { url: `/homes/${homeId}/${roomId}`, name: 'Bedroom' },
              ]}
            />
            {/* End Page Title */}
            <div className='row'>
              <div className='col-xxl-4 col-md-4'>
                <DeviceListItem
                  name={'BMP180'}
                  gateway={'NN'}
                  detailsUrl={`/homes/${homeId}/${roomId}/1`}
                />
              </div>

              <div className='col-xxl-4 col-md-4'>
                <DeviceListItem
                  name={'DHT11'}
                  gateway={'NN'}
                  detailsUrl={`/homes/${homeId}/${roomId}/2`}
                />
              </div>

              <div className='col-xxl-4 col-md-4'>
                <DeviceListItem
                  name={'DHT22'}
                  gateway={'NN'}
                  detailsUrl={`/homes/${homeId}/${roomId}/3`}
                />
              </div>

              <div className='col-xxl-4 col-md-4'>
                <DeviceListItem
                  name={'Ambient Light'}
                  gateway={'HG'}
                  detailsUrl={`/homes/${homeId}/${roomId}/4`}
                />
              </div>
            </div>
          </div>
          <div className='col-lg-4'></div>
        </div>
      </section>
    </>
  );
};

export default Devices;
