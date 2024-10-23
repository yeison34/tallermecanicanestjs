import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../axiosConfig";

function ClienteListar() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = () => {
    api.get("/clientes")
      .then((response) => setClientes(response.data))
      .catch((error) => console.error("Error: ", error));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este cliente?",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/clientes/${id}`)
          .then(() => {
            fetchClientes();
            Swal.fire("Eliminado!", "El cliente ha sido eliminado.", "success");
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
        <h2>Listado de Clientes</h2>
        <p>Lista de todos los clientes registrados.</p>
      </header>

      <div className="list-actions">
        <Link to="/clientes/crear" className="btn btn-success">
          Crear Cliente
        </Link>
      </div>

      <div className="list-wrapper">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Cédula</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Email</th>
              <th scope="col">Dirección</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.cedula}</td>
                <td>{cliente.nombres}</td>
                <td>{cliente.apellidos}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.email}</td>
                <td>{cliente.direccion}</td>
                <td>
                  <div className="table-icon-options">
                    <Link title="Detalles" to={`/clientes/detalles/${cliente.id}`}>
                      <i className="bi bi-eye-fill"></i>
                    </Link>
                    <Link title="Editar" to={`/clientes/actualizar/${cliente.id}`}>
                      <i className="bi bi-pencil-fill"></i>
                    </Link>
                    <Link title="Eliminar" onClick={() => handleDelete(cliente.id)} style={{ cursor: 'pointer' }}>
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

export default ClienteListar;
