import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      {/* Aquí iría el contenido normal de la página de inicio */}
    </div>
  );
}

export default Home;
