import React, {useEffect, useState} from "react";
import api from "../../axiosConfig";


function SelectCliente(){
    const [clientes, setClientes] = useState([]);

    useEffect(
        () => {
            api.get('/cliente')
            .then(response => setClientes(response.data))
            .catch(error => console.error("Error: ", error));
        }, []
    );

    return(
        <select id="clientes" className="form-select">
            <option disabled selected value> -- Seleccione un cliente -- </option>
            {clientes.map(cliente => (
                <option key={cliente.id}  value={cliente.id}>{cliente.nombres}</option>
            ))}                  
        </select>
    );


}

export default SelectCliente;