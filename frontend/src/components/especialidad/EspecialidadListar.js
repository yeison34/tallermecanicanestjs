import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../axiosConfig";

function EspecialidadListar() {
  const [especialidad, setEspecialidad] = useState([]);

  useEffect(() => {
    fetchEspecialidades();
  }, []);

  const fetchEspecialidades = () => {
    api.get("/especialidad")
      .then((response) => setEspecialidad(response.data))
      .catch((error) => console.error("Error: ", error));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta especialidad?",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/especialidad/${id}`)
          .then(() => {
            fetchEspecialidades();
            Swal.fire("Eliminado!", "La especialidad ha sido eliminada.", "success");
          })
          .catch((error) =>
            Swal.fire({
              title: "Error",
              icon: "error",
              text: error.message,
              confirmButtonText: "Cerrar",
            })
          );
      }
    });
  };

  return (
    <section>
      <header>
        <h2>Listado de Especialidades</h2>
        <p>Lista de todos los especialidades registrados.</p>
      </header>

      <div className="list-actions">
        <Link to="/especialidad/crear" className="btn btn-success">
          Crear especialidad
        </Link>
      </div>

      <div className="list-wrapper">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Sueldo</th>
              <th scope="col">Estado</th>
              <th scope="col">Opciones</th>

            </tr>
          </thead>
          <tbody>
            {especialidad.map((esp) => (
              <tr key={esp.id}>
                <td>{esp.nombre}</td>
                <td>{esp.sueldo}</td>
                <td>{esp.estado ? "Activo": "Inactivo"}</td>
                <td>
                  <div className="table-icon-options">
                    <Link title="Detalles" to={`/especialidades/detalles/${esp.id}`}>
                      <i className="bi bi-eye-fill"></i>
                    </Link>
                    <Link title="Editar" to={`/especialidades/actualizar/${esp.id}`}>
                      <i className="bi bi-pencil-fill"></i>
                    </Link>
                    <Link title="Eliminar" onClick={() => handleDelete(esp.id)} style={{ cursor: 'pointer' }}>
                      <i className="bi bi-trash-fill"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default EspecialidadListar;
