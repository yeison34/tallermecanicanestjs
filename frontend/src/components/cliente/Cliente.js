import React, {useEffect, useState} from "react";
import api from "../../axiosConfig";

/*Componente Cliente */
function Cliente({onSelectCliente}){
    const [cliente, setClientes] = useState([]);

    useEffect(
        () => {
            api.get('/cliente')
            .then(response => setClientes(response.data))
            .catch(error => console.error("Error: ", error));
        },
    []);

    return(
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cédula</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Email</th>
                    <th scope="col">Dirección</th>
                </tr>
            </thead>
            <tbody>
                {cliente.map(cli => (
                    <tr>
                        <td key={cli.id} onClick={() => {onSelectCliente(cli.id)}}> 
                        {cli.id} </td>
                        <td> {cli.cedula} </td>
                        <td> {cli.nombres} </td>
                        <td> {cli.apellidos} </td>
                        <td> {cli.telefono} </td>
                        <td> {cli.email} </td>
                        <td> {cli.direccion} </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default Cliente;