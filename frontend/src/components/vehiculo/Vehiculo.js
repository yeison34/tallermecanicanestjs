import React, {useEffect, useState} from "react";
import api from "../../axiosConfig";
import DetallesVehiculo from "./DetallesVehiculo";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/*Componente Vehiculo */
function Vehiculo({onSelectVehiculo}){
    const [vehiculo, setVehiculos] = useState([]);

    useEffect(
        () => {
            fetchVehiculos();
        },
    []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Esta seguro de eliminar este item?",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
        if (result.isConfirmed) {
            api.delete(`/vehiculo/${id}`)
            .then(() => {
                fetchVehiculos();
            })
            .catch(error => 
                Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    text: `${error}`,
                    confirmButtonText: 'Cerrar',
                    allowOutsideClick: false
                })
                .then(res => {                    
                    window.location.reload();
                }))

        }})
    }

    const fetchVehiculos = () => {
        api.get('/vehiculo')
            .then(response => setVehiculos(response.data))
            .catch(error => console.error("Error: ", error));
    }
    return(
        <section>
            <header>
                <h2>Listado de vehiculos</h2>
                <p>Lista de todos lo vehiculos registrados en el sistema</p>
            </header>
            <div className="list-wrapper">
                <div className="btn-wrapper">
                    <Link title="Crear vehiculo" to="/vehiculos/crear">
                        <button className="btn btn-success">Crear registro</button>
                    </Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Placa</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Color</th>
                            <th scope="col">Tipo vehiculo</th>
                            <th scope="col"><div className="table-icon-options">Opciones</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehiculo.map(veh => (
                            <tr key={veh.id}>
                                <td key={veh.id} onClick={() => {onSelectVehiculo(veh.id)}}> {veh.id} </td>
                                <td > {veh.placa} </td>
                                <td > {veh.marca} </td>
                                <td > {veh.modelo} </td>
                                <td > {veh.color} </td>
                                <td > {veh.tipovehiculo.nombre} </td>
                                <td>
                                    <div className="table-icon-options">
                                        <Link title="Detalles" to={"/vehiculos/detalles/" +  veh.id }><i className="bi bi-eye-fill"></i></Link> 
                                        <Link title="Editar" to={"/vehiculos/actualizar/" +  veh.id }><i className="bi bi-pencil-fill"></i></Link>
                                        <Link title="Eliminar" onClick={() => handleDelete(veh.id)}><i className="bi bi-trash-fill"></i></Link>
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
export default Vehiculo;
