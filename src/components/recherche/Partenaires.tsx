import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

const Partenaires = () => {
  const { control } = useFormContext();

  return (
    <>
      <h2>Partenaires</h2>
      <div>
        <Controller
          name="selectedPartner"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <TextField
                type="text"
                placeholder="Enter selected partner"
                {...field}
              />
              {/* You can remove the Radio component */}
              {/* Add other partner options here */}
            </>
          )}
        />
      </div>
      <br />
    </>
  );
};

export default Partenaires;
