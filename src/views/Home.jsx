import {Typography} from '@mui/material';
import React from 'react';
import MediaTable from '../components/MediaTable';

const Home = () => {
  return (
    <>
      <Typography component="h1" variant="h3">
        Home
      </Typography>
      <MediaTable />
    </>
  );
};

export default Home;
