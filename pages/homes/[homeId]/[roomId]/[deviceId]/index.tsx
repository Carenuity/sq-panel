import { useRouter } from 'next/router'
import React from 'react'

const DeviceDetails = () => {
 const router = useRouter();
 const {homeId, roomId, deviceId} = router.query;
  return (
    <>
      <div>Device Details Page</div>
      <div>
        Home: {homeId} <br />Room: {roomId} <br />
        Device: {deviceId}
      </div>
    </>
  );
}

export default DeviceDetails;