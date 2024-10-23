import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function ActualizarTipoVehiculo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehiculo, setVehiculo] = useState({ nombre: '', esactivo: true });
  
  const headersNgrok = {
    "Content-Type": "application/json",
    'ngrok-skip-browser-warning': 'true',
    'Access-Control-Allow-Origin': '*'        
  };

  // Cargar datos al cargar el componente
  useEffect(() => {
    api.get(`/tipovehiculo/${id}`, { headers: headersNgrok })
      .then(response => {
        setVehiculo(response.data);
      })
      .catch(error => 
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          text: `No se pudo obtener el tipo de vehículo: ${error.message}`,
          confirmButtonText: 'Cerrar',
          allowOutsideClick: false
        })
      );
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehiculo((prev) => ({
      ...prev,
      [name]: name === 'esactivo' ? value === 'true' : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (vehiculo.nombre === '') {
      return Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Debe ingresar el nombre del tipo de vehículo',
        confirmButtonText: 'Cerrar',
        allowOutsideClick: false
      });
    }

    Swal.fire({
        title: '¿Está seguro de actualizar este tipo de vehículo?',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          api.put(`/tipovehiculo/${id}`, vehiculo, { headers: headersNgrok })
            .then(() => {
              Swal.fire({
                title: 'Tipo de vehículo actualizado',
                icon: 'success',
                text: `Transacción correcta`,
                confirmButtonText: 'Cerrar'
              }).then(() => {
                navigate('/tipovehiculo/listar');  
              });
            })
            .catch(error => 
              Swal.fire({
                title: 'Error!',
                icon: 'error',
                text: `No se pudo actualizar el tipo de vehículo: ${error.message}`,
                confirmButtonText: 'Cerrar',
                allowOutsideClick: false
              })
            );
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h2>Actualizar Tipo de Vehículo</h2>
        <div className="col-6 mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            placeholder="Nombre del tipo de vehículo"
            value={vehiculo.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-6 mb-3">
          <label htmlFor="esactivo" className="form-label">Activo</label>
          <select
            id="esactivo"
            name="esactivo"
            className="form-select"
            value={vehiculo.esactivo}
            onChange={handleChange}
          >
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActualizarTipoVehiculo;
