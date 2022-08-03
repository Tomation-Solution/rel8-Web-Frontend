import React from 'react';
import { Grid, Typography } from '@mui/material';
import keyImage from '../images/Vector.png'
import Image from 'next/image';

export default function LandingPage() {
  return (
    <Grid container>
        <Grid item md={6} sm={12}>
          <Image src={keyImage} objectFit='cover' height={500}  />
        </Grid>
        <Grid item md={6}>
          <Typography>Automate your Bakery</Typography>
          <Typography>Process with Compact</Typography>
           <Typography>ghghgfghhg jghghgghhg jghghgghhg jghghgghhgjghghgghhg jghghgghhg jghghgghhg jghghgghhg jghghgghhgj ghghgghhg  jghghg ghhg jghgh gghhgjghghgghhg jghghgghh ghghgghhg jghghgghhg jghghgghhgjghghgghhg  
            ghghgghhg jghghgghhg jghghgghhg jghghgghhgjghghgghhg jghghgghhg jghghgghhg</Typography>
        </Grid>
    </Grid>
  );
}
