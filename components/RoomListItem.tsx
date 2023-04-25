import React from 'react'
import ListItem from './ListItem';

const RoomListItem = ({
  name,
  devices,
  detailsUrl,
}: {
  name: string;
  devices: number;
  detailsUrl: string;
}) => {
  return (
    <>
      <ListItem
        url={detailsUrl}
        subItem={devices}
        subItemCategory={'Devices'}
        name={name}
      />
    </>
  );
};

export default RoomListItem