import React, { useEffect, useState } from "react";
import api from "../../axiosConfig";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/*Componente Vehiculo */
function Empleado({ onSelectEmpleado }) {
    const [empleado, setEmpleados] = useState([]);

    useEffect(() => {
        fetchEmpleados();
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Esta seguro de eliminar este item?",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`/empleado/${id}`)
                    .then(() => {
                        fetchEmpleados();
                    })
                    .catch((error) =>
                        Swal.fire({
                            title: "Error!",
                            icon: "error",
                            text: `${error}`,
                            confirmButtonText: "Cerrar",
                            allowOutsideClick: false,
                        }).then((res) => {
                            window.location.reload();
                        })
                    );
            }
        });
    };

    const headersNgrok = {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        "Access-Control-Allow-Origin": "*",
    };

    const fetchEmpleados = () => {
        api.get("/empleado",{
            headers: headersNgrok,
        })
            .then((response) => setEmpleados(response.data))
            .catch((error) => console.error("Error: ", error));
    };
    return (
        <section>
            <header>
                <h2>Listado de empleados</h2>
                <p>Lista de todos lo empleados registrados en el sistema</p>
            </header>
            <div className="list-wrapper">
                <div className="btn-wrapper">
                    <Link title="Crear vehiculo" to="/empleados/crear">
                        <button className="btn btn-success">
                            Crear Empleado
                        </button>
                    </Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Cedula</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Email</th>
                            <th scope="col">Direcion</th>
                            <th scope="col">Fecha Ingreso</th>
                            <th scope="col">Especialidad</th>
                            <th scope="col">
                                <div className="table-icon-options">
                                    Opciones
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleado.map((veh) => (
                            <tr key={veh.id}>
                                <td
                                    key={veh.id}
                                    onClick={() => {
                                        onSelectEmpleado(veh.id);
                                    }}>
                                    {" "}
                                    {veh.id}{" "}
                                </td>
                                <td> {veh.cedula} </td>
                                <td> {veh.nombres} </td>
                                <td> {veh.apellidos} </td>
                                <td> {veh.telefono} </td>
                                <td> {veh.email} </td>
                                <td> {veh.direccion} </td>
                                <td> {veh.fechaingreso} </td>
                                <td> {veh.especialidad.nombre} </td>
                                <td>
                                    <div className="table-icon-options">
                                        <Link
                                            title="Detalles"
                                            to={
                                                "/empleados/detalles/" + veh.id
                                            }>
                                            <i className="bi bi-eye-fill"></i>
                                        </Link>
                                        <Link
                                            title="Editar"
                                            to={
                                                "/empleados/actualizar/" +
                                                veh.id
                                            }>
                                            <i className="bi bi-pencil-fill"></i>
                                        </Link>
                                        <Link
                                            title="Eliminar"
                                            onClick={() =>
                                                handleDelete(veh.id)
                                            }>
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
export default Empleado;
