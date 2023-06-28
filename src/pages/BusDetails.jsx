import React from 'react';
import { useParams } from 'react-router-dom';

function BusDetails() {
  const { id } = useParams();

  // Obtener información del bus con el ID proporcionado

  return (
    <div>
      <h2>Detalles del Bus {id}</h2>
      {/* Mostrar información del bus */}
    </div>
  );
}

export default BusDetails;
