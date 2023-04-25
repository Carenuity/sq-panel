import Link from 'next/link';
import React from 'react';
import ListItem from './ListItem';

const HomeListItem = ({
  name,
  numberOfRooms,
  detailsUrl,
}: {
  name: string;
  numberOfRooms: number;
  detailsUrl: string;
}) => {
  return (
    <>
      <ListItem
        url={detailsUrl}
        subItem={numberOfRooms}
        subItemCategory={'Rooms'}
        name={name}
      />
    </>
  );
};

export default HomeListItem;
