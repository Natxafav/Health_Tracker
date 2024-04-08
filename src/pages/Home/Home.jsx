import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicationCreate from '../../components/Medication/MedicationCreate';
import Urgency from '../../components/Urgency/Urgency';

function Home() {

  return (
    <div>
      <h1>TEST</h1>
      <MedicationCreate/>
      <Urgency/>
    </div>
  );
}

export default Home;
