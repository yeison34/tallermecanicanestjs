import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function ActualizarCliente() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({ nombre: '', esactivo: true });

  useEffect(() => {
    api.get(`/clientes/${id}`)
      .then(response => {
        setCliente(response.data);
      })
      .catch(error => 
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          text: `No se pudo obtener el cliente: ${error.message}`,
          confirmButtonText: 'Cerrar',
          allowOutsideClick: false
        })
      );
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = async () => {
    Swal.fire({
      title: "¿Confirmar la actualización?",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        api.put(`/clientes/${id}`, cliente)
          .then(() => {
            Swal.fire({
              title: 'Cliente actualizado',
              icon: 'success',
              confirmButtonText: 'Cerrar'
            });
            navigate("/clientes/listar");
          })
          .catch(error => 
            Swal.fire({
              title: 'Error',
              icon: 'error',
              text: error.message,
              confirmButtonText: 'Cerrar'
            })
          );
      }
    });
  };

  return (
    <div className="container">
      <h2>Actualizar Cliente</h2>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="form-control"
          value={cliente.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="esactivo"
          name="esactivo"
          checked={cliente.esactivo}
          onChange={() => setCliente({ ...cliente, esactivo: !cliente.esactivo })}
        />
        <label className="form-check-label" htmlFor="esactivo">
          ¿Está activo?
        </label>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Actualizar
      </button>
    </div>
  );
}

export default ActualizarCliente;
