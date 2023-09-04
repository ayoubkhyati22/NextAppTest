import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

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
              <FormControlLabel
                value="RMA"
                control={<Radio />}
                label="RMA"
                {...field}
              />
              <FormControlLabel
                value="OtherPartner"
                control={<Radio />}
                label="Other Partner"
                {...field}
              />
              {/* Add more partner options here */}
            </>
          )}
        />
      </div>
      <br />
    </>
  );
};

export default Partenaires;
