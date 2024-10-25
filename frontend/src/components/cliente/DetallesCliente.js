import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function DetallesCliente() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook para la navegación
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    api.get(`/clientes/${id}`)
      .then(response => {
        setCliente(response.data);
      })
      .catch(error => 
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          text: `No se pudo obtener los detalles del cliente: ${error.message}`,
          confirmButtonText: 'Cerrar',
          allowOutsideClick: false
        })
      );
  }, [id]);

  if (!cliente) {
    return <div>Cargando...</div>;
  }

  return (
    <section>
      <header>
        <h3>Detalles del Cliente</h3>
        <p>A continuación se muestran los datos del cliente.</p>
      </header>

      <div className="cliente-details-wrapper">
        <div className="cliente-details">
          <div className="detail-item">
            <h4 className="detail-title">Cédula</h4>
            <p className="detail-desc">{cliente.cedula}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-title">Nombres</h4>
            <p className="detail-desc">{cliente.nombres}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-title">Apellidos</h4>
            <p className="detail-desc">{cliente.apellidos}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-title">Teléfono</h4>
            <p className="detail-desc">{cliente.telefono}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-title">Email</h4>
            <p className="detail-desc">{cliente.email}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-title">Dirección</h4>
            <p className="detail-desc">{cliente.direccion}</p>
          </div>
        </div>
        <div className="cliente-detail-img">
          <div className="icon-container">
            <i className="bx bxs-user"></i>
          </div>
        </div>
      </div>

      <div className="list-actions">
        <button className="btn btn-primary" onClick={() => navigate("/clientes/listar")}>
          Regresar
        </button>
      </div>
    </section>
  );
}

export default DetallesCliente;
