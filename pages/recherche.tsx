import React from 'react'
import Partenaires from '../src/components/recherche/Partenaires'
import Resultat from '../src/components/recherche/Resultat'
import ButtonSearch from '../src/components/recherche/ButtonSearch'

import { useForm, Controller,FormProvider } from 'react-hook-form';
import TabsMenu from '../src/components/recherche/tabs/TabsMenu'
import { Button } from '@mui/material';

const Recherche = () => {
    const[contrats, setContrats] = React.useState({})

    const methods = useForm();
  
    const onSubmit = (data: any) => {
      setContrats(data)
    };
    

  return (
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Partenaires />
      <TabsMenu />
      <Button variant="contained" type='submit'>
        Recherche
      </Button>
      <Resultat parameters={contrats} />
    </form>
  </FormProvider>
  )
}

export default Recherche