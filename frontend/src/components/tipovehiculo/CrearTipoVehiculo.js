import React, { useState } from "react";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function CrearTipoVehiculo() {
  const [nombre, setNombre] = useState('');
  const [esActivo, setEsActivo] = useState(true);

  const handleSubmit = async () => {
    if (nombre === '') {
      return Swal.fire({
        title: 'Falta completar el nombre',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
    }

    const nuevoTipoVehiculo = { nombre, esActivo };

    Swal.fire({
      title: "¿Confirmar la creación?",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        api.post('/tipovehiculo', nuevoTipoVehiculo)
          .then(response => {
            Swal.fire({
              title: 'Tipo de vehículo creado',
              icon: 'success',
              confirmButtonText: 'Cerrar'
            });
            window.location.href = `/tiposvehiculo`;
          })
          .catch(error => Swal.fire({
            title: 'Error',
            icon: 'error',
            text: error.message,
            confirmButtonText: 'Cerrar'
          }));
      }
    });
  };

  return (
    <div className="container">
      <h2>Crear Tipo de Vehículo</h2>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          placeholder="Nombre del tipo de vehículo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="esActivo"
          checked={esActivo}
          onChange={(e) => setEsActivo(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="esActivo">
          ¿Está activo?
        </label>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Guardar
      </button>
    </div>
  );
}

export default CrearTipoVehiculo;
