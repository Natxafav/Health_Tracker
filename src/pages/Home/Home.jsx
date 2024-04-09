import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicationCreate from '../../components/Medication/MedicationCreate';
import CardContainer from '../../components/cardContainer/CardContainer';


function Home() {
  const navigate = useNavigate();

 

  return (
    <div>
      <h1>TEST</h1>
      <CardContainer/>
    </div>
  );
}

export default Home;
