import React, {useEffect, useState} from "react";
import api from "../../axiosConfig";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

function ActualizarVehiculo(){
    const { id } = useParams();

    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [color, setColor] = useState('');
    const [tiposVehiculo, setTiposVehiculo] = useState([]);
    const [tipoVehiculoId, setTipoVehiculoId] = useState(0);
    const [clientes, setClientes] = useState([]);
    const [clienteId, setClienteId] = useState(0);

    const headersNgrok = {
        "Content-Type": "application/json",
        'ngrok-skip-browser-warning': 'true',
        'Access-Control-Allow-Origin': '*'        
    }

    useEffect(
        () => {
            api.get('/tipovehiculo', {
                headers: headersNgrok
            })
            .then(response => setTiposVehiculo(response.data))
            .catch(error => console.error("Error: ", error));

            api.get('/cliente', {
                headers: headersNgrok
            })
            .then(response => setClientes(response.data))
            .catch(error => console.error("Error: ", error));   
                   
            api.get(`/vehiculo/${id}`, {
                headers: headersNgrok
            })
            .then(response => { 
                const vehiculo = response.data;
                setPlaca(vehiculo.placa);
                setModelo(vehiculo.modelo);
                setMarca(vehiculo.marca);
                setColor(vehiculo.color);                
                setTipoVehiculoId(vehiculo.tipovehiculo?.id || '');                    
                setClienteId(vehiculo.cliente?.id || '');    
            })
            .catch(error => 
                Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    text: `${error}`,
                    confirmButtonText: 'Cool'
            }));
        }, []        
    );

    const handleSubmit = async() => {        
        if(placa == '' || modelo == '' || marca == '' || color == '' || tipoVehiculoId == 0 || clienteId == 0){
            return Swal.fire({
                title: 'Registrar todos los campos!',
                icon: 'error',
                text: `Para confirmar el registro debe diligenciar todos los campos`,
                confirmButtonText: 'Cerrar',
                allowOutsideClick: false
            })
        }

        const actualizarVehiculo = { placa, modelo, marca, color, tipovehiculo:{id: tipoVehiculoId}, cliente: {id: clienteId}}
        console.log(actualizarVehiculo);
        Swal.fire({
            title: "Esta seguro de confirmar esta acción?",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
                api.put(`/vehiculo/${id}`, actualizarVehiculo)
                .then(response => {
                    Swal.fire({
                        title: 'Vehiculo actualizado',
                        icon: 'success',
                        text: `Transacción correcta`,
                        confirmButtonText: 'Cerrar'
                    })
                    .then(res => {
                        window.location.href = `/vehiculos/detalles/${id}`              
                    })                    
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
                    })
                );
            } else if (result.isDenied) {
              return;
            }
          });        
    }    

    return(
        <div className="container-fluid">
            <div className="row">
                <h2>Actualizar vehiculo</h2>
                <div className="col-6 mb-3">
                    <label htmlFor="placa" className="form-label">Placa</label>
                    <input type="text" id="placa" className="form-control" placeholder="Placa" value={placa} onChange={(e) => {setPlaca(e.target.value)}} required/>
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="modelo" className="form-label">Modelo</label>
                    <input type="text" id="modelo" className="form-control" placeholder="Modelo" value={modelo} onChange={(e) => {setModelo(e.target.value)}} required/>
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="marca" className="form-label">Marca</label>
                    <input type="text" id="marca" className="form-control" placeholder="Marca" value={marca} onChange={(e) => {setMarca(e.target.value)}} required/>
                    </div>
                <div className="col-6 mb-3">
                    <label htmlFor="color" className="form-label">Color</label>
                    <input type="text" id="color" className="form-control" placeholder="Color" value={color} onChange={(e) => {setColor(e.target.value)}} required/>
                    </div>
                
                <div className="col-6 mb-3">
                    <label htmlFor="tiposvehiculo" className="form-label">Tipo vehiculo</label>
                    <select id="tiposvehiculo" className="form-select" value={tipoVehiculoId} onChange={(e) => { setTipoVehiculoId(+e.target.value)}}>
                        <option disabled selected value> -- Seleccione un tipo de vehiculo -- </option>
                        {tiposVehiculo.map(tipoVehiculo => (
                            <option key={tipoVehiculo.id}  value={tipoVehiculo.id}>{tipoVehiculo.nombre}</option>
                        ))}                  
                    </select>
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="clientes" className="form-label">Cliente</label>
                    <select id="clientes" className="form-select" value={clienteId} onChange={(e) => { setClienteId(+e.target.value)}}>
                        <option disabled selected value> -- Seleccione un cliente -- </option>
                        {clientes.map(cliente => (
                            <option key={cliente.id}  value={cliente.id}>{cliente.nombres}</option>
                        ))}                  
                    </select>
                </div>
            </div>
            <button className="btn btn-primary" type="submit"  onClick={handleSubmit}>Guardar</button>
         
        </div>
    )
}

export default ActualizarVehiculo;