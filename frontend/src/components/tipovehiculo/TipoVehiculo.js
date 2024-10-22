import React, {useEffect, useState} from "react";
import api from "../../axiosConfig";


function TipoVehiculo({onSelectTipoVehiculo}){
    const [tipoVehiculo, setTipoVehiculo] = useState([]);

    useEffect(
        () => {
            api.get('/tipovehiculo')
            .then(response => setTipoVehiculo(response.data))
            .catch(error => console.error("Error: ", error));
        },
    []);

    return(
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Es activo</th>
                </tr>
            </thead>
            <tbody>
                {tipoVehiculo.map(tvh => (
                    <tr>
                        <td key={tvh.id} onClick={() => {onSelectTipoVehiculo(tvh.id)}}> 
                        {tvh.id} </td>
                        <td> {tvh.nombre} </td>
                        <td> {tvh.esactivo} </td>                       
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TipoVehiculo;