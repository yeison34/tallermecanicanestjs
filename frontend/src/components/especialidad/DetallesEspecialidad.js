import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function DetallesEspecialidad() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook para la navegación
  const [especialidad, setEspecialidad] = useState(null);

  useEffect(() => {
    api.get(`/especialidad/${id}`)
      .then(response => {
        setEspecialidad(response.data);
      })
      .catch(error => 
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          text: `No se pudo obtener los detalles del especialidad: ${error.message}`,
          confirmButtonText: 'Cerrar',
          allowOutsideClick: false
        })
      );
  }, [id]);

  if (!especialidad) {
    return <div>Cargando...</div>;
  }

  return (
    <section>
      <header>
        <h3>Detalles de la especialidad</h3>
        <p>A continuación se muestran los datos de la especialidad.</p>
      </header>

      <div className="cliente-details-wrapper">
        <div className="cliente-details">
          <div className="detail-item">
            <h4 className="detail-title">Nombres</h4>
            <p className="detail-desc">{especialidad.nombre}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-title">Sueldo</h4>
            <p className="detail-desc">{especialidad.sueldo}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-title">Estado</h4>
            <p className="detail-desc">{especialidad.estado ? "Activo" : "Inactivo"}</p>
          </div>

        </div>
        <div className="cliente-detail-img">
          <div className="icon-container">
            <i className="bx bxs-user"></i>
          </div>
        </div>
      </div>

      <div className="list-actions">
        <button className="btn btn-primary" onClick={() => navigate("/especialidades/listar")}>
          Regresar
        </button>
      </div>
    </section>
  );
}

export default DetallesEspecialidad;
