import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../axiosConfig"; // Configuración para hacer peticiones

function TipoVehiculoListar() {
  const [tiposVehiculo, setTiposVehiculo] = useState([]);

  useEffect(() => {
    fetchTiposVehiculo();
  }, []);

  const fetchTiposVehiculo = () => {
    api.get("/tipovehiculo")
      .then((response) => setTiposVehiculo(response.data))
      .catch((error) => console.error("Error: ", error));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este tipo de vehículo?",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/tipovehiculo/${id}`)
          .then(() => {
            fetchTiposVehiculo(); 
            Swal.fire("Eliminado!", "El tipo de vehículo ha sido eliminado.", "success");
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
        <h2>Listado de Tipos de Vehículo</h2>
        <p>Lista de todos los tipos de vehículos registrados.</p>
      </header>

      <div className="list-actions">
        <Link to="/tipovehiculo/crear" className="btn btn-success">
          Crear Tipo de Vehículo
        </Link>
      </div>

      <div className="list-wrapper">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Activo</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {tiposVehiculo.map((tipo) => (
              <tr key={tipo.id}>
                <td>{tipo.id}</td>
                <td>{tipo.nombre}</td>
                <td>{tipo.esactivo ? "Sí" : "No"}</td>
                <td>
                  <div className="table-icon-options">
                    <Link title="Detalles" to={`/tipovehiculo/detalles/${tipo.id}`}>
                      <i className="bi bi-eye-fill"></i>
                    </Link>

                    <Link title="Editar" to={`/tipovehiculo/actualizar/${tipo.id}`}>
                      <i className="bi bi-pencil-fill"></i>
                    </Link>

                    <Link title="Eliminar" onClick={() => handleDelete(tipo.id)} style={{ cursor: 'pointer' }}>
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

export default TipoVehiculoListar;
