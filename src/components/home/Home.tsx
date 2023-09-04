import React from 'react'
import ListeUsers from '../users/ListeUsers'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2



const Home = () => {
  return (
    <>
    <Grid container spacing={2}>
  <Grid xs={8}>
  <ListeUsers/>
  </Grid>

</Grid>

    </>
  )
}

export default Home