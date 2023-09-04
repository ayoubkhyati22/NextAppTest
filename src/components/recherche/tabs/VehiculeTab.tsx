import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const VehiculeTab = () => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
          name="immatriculation"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <TextField
                type="text"
                placeholder="Enter immat"
                {...field}
              />
            </>
          )}
        />
    </>
  );
}

export default VehiculeTab;
