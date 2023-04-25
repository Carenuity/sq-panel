import React from 'react';
import DeviceListItem from '../../../../components/DeviceListItem';
import PageTitle from '../../../../components/PageTitle';
import { useRouter } from 'next/router';

const Devices = () => {
  const router = useRouter();
  const { homeId, roomId } = router.query;

  return (
    <>
      <PageTitle
        title='Bedroom Devices'
        path={[
          { url: '/homes', name: 'My Homes' },
          { url: `/homes/${homeId}`, name: `Apartment ${homeId}` },
          { url: `/homes/${homeId}/${roomId}`, name: 'Bedroom' },
        ]}
      />
      {/* End Page Title */}
      <section className='section dashboard'>
        <div className='row'>
          <div className='col-xxl-4 col-md-4'>
            <DeviceListItem
              name={'Pressure Sensor'}
              gateway={'NN'}
              detailsUrl={`/homes/${homeId}/${roomId}/1`}
            />
          </div>

          <div className='col-xxl-4 col-md-4'>
            <DeviceListItem
              name={'Humidity Sensor'}
              gateway={'NN'}
              detailsUrl={`/homes/${homeId}/${roomId}/2`}
            />
          </div>

          <div className='col-xxl-4 col-md-4'>
            <DeviceListItem
              name={'Temperator Sensor'}
              gateway={'NN'}
              detailsUrl={`/homes/${homeId}/${roomId}/3`}
            />
          </div>

          <div className='col-xxl-4 col-md-4'>
            <DeviceListItem
              name={'Light Sensor'}
              gateway={'HG'}
              detailsUrl={`/homes/${homeId}/${roomId}/4`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Devices;
