import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function DetallesTipoVehiculo() {
  const { id } = useParams();  
  const [tipoVehiculo, setTipoVehiculo] = useState(null);

  useEffect(() => {
    console.log("ID del tipo de vehículo:", id);
    
    api.get(`/tipovehiculo/${id}`)
      .then(response => {
        setTipoVehiculo(response.data); 
      })
      .catch(error => {
        console.error('Error: ', error);
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          text: `No se pudo obtener el tipo de vehículo: ${error.message}`,
          confirmButtonText: 'Ok'
        });
      });
  }, [id]);

  if (!tipoVehiculo) {
    return <div>Cargando...</div>;
  }

  return (
    <section>
      <header>
        <h3>Detalles del Tipo de Vehículo</h3>
        <p>A continuación se muestran los datos del tipo de vehículo seleccionado:</p>
      </header>
      <div className="tipo-vehiculo-details">
        <div className="detail-item">
          <h4 className="detail-title">ID</h4>
          <p className="detail-desc">{tipoVehiculo.id}</p>
        </div>
        <div className="detail-item">
          <h4 className="detail-title">Nombre</h4>
          <p className="detail-desc">{tipoVehiculo.nombre}</p>
        </div>
        <div className="detail-item">
          <h4 className="detail-title">Activo</h4>
          <p className="detail-desc">{tipoVehiculo.esactivo ? 'Sí' : 'No'}</p>
        </div>
        <Link 
          to="/tipovehiculo/listar" 
          className="btn btn-primary" 
          style={{ color: 'white', padding: '10px 20px', textDecoration: 'none' }}  
        >
          Regresar
        </Link>
      </div>
    </section>
  );
}

export default DetallesTipoVehiculo;
