import React from 'react';
import ListItem from './ListItem';
import dynamic from 'next/dynamic';

const ListGroupItem = dynamic(() => import('./ListGroupItem'), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

const DeviceListItem = ({
  name,
  gateway,
  detailsUrl,
}: {
  name: string;
  gateway: string;
  detailsUrl: string;
}) => {
  return (
    <>
      <ListItem
        url={detailsUrl}
        subItem={gateway}
        subItemCategory={'Gateway'}
        name={name}
      >
        <div className='list-group list-group-flush'>
          <ListGroupItem
            deviceName={name}
            measurement={'Temperature'}
            modalId={`${name.replaceAll(/[^a-zA-Z]/g, '')}-temperature`}
            icon='bi bi-thermometer-half'
            reading='14'
          >
            Temperature
          </ListGroupItem>
          <ListGroupItem
            deviceName={name}
            measurement={'Humidity'}
            modalId={`${name.replaceAll(/[^a-zA-Z]/g, '')}-Humidity`}
            icon='bi bi-cloud-drizzle-fill'
            reading='14'
          >
            Humidity
          </ListGroupItem>
          <ListGroupItem
            modalId={`${name.replaceAll(/[^a-zA-Z]/g, '')}-pressure`}
            icon='bi bi-cloud-arrow-down-fill'
            reading='14'
            deviceName={name}
            measurement={'Air Pressure'}
          >
            Air Pressure
          </ListGroupItem>
          <ListGroupItem
            deviceName={name}
            measurement={'CO2 Level'}
            modalId={`${name.replaceAll(/[^a-zA-Z]/g, '')}-co2-level`}
            icon='ri-scales-3-fill'
            reading='14'
          >
            CO<sub>2</sub> Level
          </ListGroupItem>
          <ListGroupItem
            deviceName={name}
            measurement={'Presence Detector'}
            modalId={`${name.replaceAll(/[^a-zA-Z]/g, '')}-presence-detector`}
            icon='ri-alarm-warning-fill'
            reading='14'
          >
            Presence Detector
          </ListGroupItem>
        </div>
      </ListItem>
    </>
  );
};

export default DeviceListItem;
