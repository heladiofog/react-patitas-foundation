import React from 'react';

const Form = () => (
  <div className="Form">
    <div className="Form-head">
      <h2>Dar en Adopción</h2>
    </div>
    <div className="Form-item">
      <form>
        <input type="text" name="petName" id="petName" placeholder="Nombre de la mascota" />
        <input type="text" name="petdescription" id="petdescription" placeholder="Describe tu mascota" />

        <select name="petType" id="petType">
          <option value="" selected>Seleccionar</option>
          <option value="perro">Perro</option>
          <option value="gato">Pato</option>
        </select>

        <select name="petGender" id="petGender">
          <option value="" selected>Seleccionar</option>
          <option value="female">Femenino</option>
          <option value="male">Masculino</option>
        </select>

        <select name="adopt" id="adopt">
          <option value="" selected>Seleccionar</option>
          <option value="true">Dar en Adopción</option>
          <option value="false">Cuidar</option>
        </select>

        <input type="file" name="petPhoto" id="petPhoto" />

        <button>Guardar</button>
      </form>
    </div>
  </div>
);

export default Form;