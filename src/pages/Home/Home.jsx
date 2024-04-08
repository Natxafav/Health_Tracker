import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicationCreate from '../../components/Medication/MedicationCreate';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const roleId = localStorage.getItem('roleId');
    if (roleId === null) {
      
      navigate('/family-choice'); 
    }
  }, [navigate]);

  return (
    <div>
      <h1>TEST</h1>
      <MedicationCreate/>
    </div>
  );
}

export default Home;
