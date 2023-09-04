import React from 'react';

const Resultat = ({ parameters }) => {
  return (
    <div>
      <h2>Affichage</h2>
      <p>Partenaire: {parameters.selectedPartner}</p> {/* Display the selectedPartner value */}
      <p>Immat: {parameters.immatriculation}</p> {/* Display the selectedPartner value */}
    </div>
  );
};

export default Resultat;
