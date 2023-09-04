import React from 'react'
import TextField from '@mui/material/TextField';

const ClientTab = () => {
  return (
    <>
    <TextField id="nom" label="Nom" variant="outlined" />
    &nbsp;&nbsp;&nbsp;&nbsp;
    <TextField id="prenom" label="Prenom" variant="outlined" />

    </>
  )
}

export default ClientTab