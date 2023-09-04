import React from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@mui/material/Button';

const ButtonSearch = () => {
  const { handleSubmit, watch } = useFormContext();
  const selectedPartner = watch('selectedPartner'); // Access the selectedPartner value

  const onSubmit = (data) => {
    // Handle form submission here
    console.log('Form Data:', data);
    console.log('Selected Partner:', selectedPartner); // Include selectedPartner in the console log
  };

  return (
    <>
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Recherche
      </Button>
    </>
  );
};

export default ButtonSearch;
