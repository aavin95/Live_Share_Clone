import React from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../components/Editor'), { ssr: false });

const Home = () => {
  return <Editor />;
};

export default Home;
