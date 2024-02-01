import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import { RingLoader } from 'react-spinners';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <RingLoader color='#3498db'  loading={true} size={50} />
      <p
        style={{
          fontSize: 14,
          color: '#3498db',
          fontWeight: '800',
          marginTop: 10,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
