import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function ActualizarEspecialidad() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [especialidad, setEspecialidad] = useState({ nombres: '', esactivo: true });

  useEffect(() => {
    api.get(`/especialidad/${id}`)
      .then(response => {
        setEspecialidad(response.data);
      })
      .catch(error => 
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          text: `No se pudo obtener la especialidad: ${error.message}`,
          confirmButtonText: 'Cerrar',
          allowOutsideClick: false
        })
      );
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEspecialidad({ ...especialidad, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("Especialidad: ", especialidad);
    Swal.fire({
      title: "¿Confirmar la actualización?",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        api.put(`/especialidad/${id}`, especialidad)
          .then(() => {
            Swal.fire({
              title: 'Especialidad actualizada',
              icon: 'success',
              confirmButtonText: 'Cerrar'
            });
            navigate(`/especialidades/detalles/${id}`);
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
          value={especialidad.nombre}
          onChange={handleChange}
          required
        />
      </div>
  

      <div className="mb-3">
        <label htmlFor="sueldo" className="form-label">Sueldo</label>
        <input
          type="num"
          id="sueldo"
          name="sueldo"
          className="form-control"
          value={especialidad.sueldo}
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
          value={especialidad.estado}
          checked={especialidad.estado}
          onChange={() => setEspecialidad({ ...especialidad, estado: !especialidad.estado })}
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

export default ActualizarEspecialidad;
