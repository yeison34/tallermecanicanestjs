import React, { useEffect, useState } from "react";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function CrearVehiculo() {
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [color, setColor] = useState('');
  const [tipoVehiculoId, setTipoVehiculoId] = useState(0);
  const [clienteId, setClienteId] = useState(0);

  const [tiposVehiculo, setTiposVehiculo] = useState([]);
  const [clientes, setClientes] = useState([]);

  const headersNgrok = {
    "Content-Type": "application/json",
    'ngrok-skip-browser-warning': 'true',
    'Access-Control-Allow-Origin': '*'
  };

  useEffect(() => {
    api.get('/tipovehiculo', { headers: headersNgrok })
      .then(response => setTiposVehiculo(response.data))
      .catch(error => console.error("Error: ", error));

    api.get('/clientes', { headers: headersNgrok })
      .then(response => setClientes(response.data))
      .catch(error => console.error("Error: ", error));
  }, []);

  const handleSubmit = async () => {
    if (!placa || !modelo || !marca || !color || tipoVehiculoId === 0 || clienteId === 0) {
      return Swal.fire({
        title: 'Todos los campos son obligatorios',
        icon: 'error',
        text: `Por favor, completa todos los campos antes de continuar.`,
        confirmButtonText: 'Cerrar',
        allowOutsideClick: false
      });
    }
  
    const nuevoVehiculo = {
      placa,
      modelo,
      marca,
      color,
      tipovehiculo: { id: tipoVehiculoId },
      cliente: { id: clienteId }
    };
  
    Swal.fire({
      title: "¿Está seguro de confirmar esta acción?",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        api.post('/vehiculo', nuevoVehiculo)
          .then(response => {
            Swal.fire({
              title: 'Vehículo creado',
              icon: 'success',
              text: `Transacción correcta`,
              confirmButtonText: 'Cerrar'
            });
  
            window.location.href = `/vehiculos/detalles/${response.data.id}`;
          })
          .catch(error => {
            if (error.response && error.response.status === 409) {
              Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Este vehículo ya está registrado.',
                confirmButtonText: 'Cerrar',
                allowOutsideClick: false
              });
            } else {
              Swal.fire({
                title: 'Error',
                icon: 'error',
                text: `${error.response?.data?.message || error}`,
                confirmButtonText: 'Cerrar',
                allowOutsideClick: false
              });
            }
          });
      }
    });
  };
  

  return (
    <div className="container-fluid">
      <div className="row">
        <h2>Crear nuevo vehículo</h2>

        <div className="col-6 mb-3">
          <label htmlFor="placa" className="form-label">Placa</label>
          <input type="text" id="placa" className="form-control" placeholder="Placa" value={placa} onChange={(e) => setPlaca(e.target.value)} required />
        </div>

        <div className="col-6 mb-3">
          <label htmlFor="modelo" className="form-label">Modelo</label>
          <input type="text" id="modelo" className="form-control" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
        </div>

        <div className="col-6 mb-3">
          <label htmlFor="marca" className="form-label">Marca</label>
          <input type="text" id="marca" className="form-control" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} required />
        </div>

        <div className="col-6 mb-3">
          <label htmlFor="color" className="form-label">Color</label>
          <input type="text" id="color" className="form-control" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} required />
        </div>

        <div className="col-6 mb-3">
          <label htmlFor="tiposvehiculo" className="form-label">Tipo de Vehículo</label>
          <select id="tiposvehiculo" className="form-select" onChange={(e) => setTipoVehiculoId(+e.target.value)} required>
            <option value="0" disabled selected>-- Seleccione un tipo de vehículo --</option>
            {tiposVehiculo.map(tipoVehiculo => (
              <option key={tipoVehiculo.id} value={tipoVehiculo.id}>{tipoVehiculo.nombre}</option>
            ))}
          </select>
        </div>

        <div className="col-6 mb-3">
          <label htmlFor="clientes" className="form-label">Cliente</label>
          <select id="clientes" className="form-select" onChange={(e) => setClienteId(+e.target.value)} required>
            <option value="0" disabled selected>-- Seleccione un cliente --</option>
            {clientes.map(cliente => (
              <option key={cliente.id} value={cliente.id}>{cliente.nombres}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Guardar</button>
    </div>
  );
}

export default CrearVehiculo;
