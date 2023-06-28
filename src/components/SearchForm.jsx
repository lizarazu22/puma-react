import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Realizar búsqueda utilizando los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('route')} placeholder="Ingrese una ruta" />
      <input {...register('time')} placeholder="Ingrese un horario" />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;
