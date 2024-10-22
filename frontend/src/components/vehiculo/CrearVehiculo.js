import React, {useEffect, useState} from "react";
import api from "../../axiosConfig";
import Swal from "sweetalert2";


function CrearVehiculo(){
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [color, setColor] = useState('');
    //const [cedula, setCedula] = useState('');
    const [tipoVehiculo, setTipoVehiculo] = useState('');
    const [cliente, setCliente] = useState('');

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
            api.get('/tipovehiculo',{
                headers: headersNgrok
            })
            .then(response => setTiposVehiculo(response.data))
            .catch(error => console.error("Error: ", error));

            api.get('/cliente',{
                headers: headersNgrok
            })
            .then(response => setClientes(response.data))
            .catch(error => console.error("Error: ", error));

        }, []
       
        
    );

    const handleSubmit = async() => {
        console.log(placa, modelo, marca, color);
        if(placa == '' || modelo == '' || marca == '' || color == '' || tipoVehiculoId == 0 || clienteId == 0){
            return Swal.fire({
                title: 'Registrar todos los campos!',
                icon: 'error',
                text: `Para confirmar el registro debe diligenciar todos los campos`,
                confirmButtonText: 'Cerrar',
                allowOutsideClick: false
            })
        }

        const nuevoVehiculo = { placa, modelo, marca, color, tipovehiculo:{id: tipoVehiculoId}, cliente: {id: clienteId}}
        console.log("Nuevo vehiculo: ", nuevoVehiculo);

        Swal.fire({
            title: "Esta seguro de confirmar esta acción?",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
                api.post('/vehiculo', nuevoVehiculo)
                .then(response => {
                    console.log('Vehiculo creado', response.data);

                    Swal.fire({
                        title: 'Vehiculo creado',
                        icon: 'success',
                        text: `Transacción correcta`,
                        confirmButtonText: 'Cerrar'
                    })
                    
                    window.location.href = `/vehiculos/detalles/${response.data.id}`   
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
            }
            else if (result.isDenied) {
                return;
            }
        })
    }

    

    return(
        <div className="container-fluid">
            <div className="row">
                <h2>Crear nuevo vehiculo</h2>
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
                    <select id="tiposvehiculo" className="form-select" onChange={(e) => { setTipoVehiculoId(+e.target.value)}}>
                        <option disabled selected value> -- Seleccione un tipo de vehiculo -- </option>
                        {tiposVehiculo.map(tipoVehiculo => (
                            <option key={tipoVehiculo.id}  value={tipoVehiculo.id}>{tipoVehiculo.nombre}</option>
                        ))}                  
                    </select>
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="clientes" className="form-label">Cliente</label>
                    <select id="clientes" className="form-select"  onChange={(e) => { setClienteId(+e.target.value)}}>
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

export default CrearVehiculo;