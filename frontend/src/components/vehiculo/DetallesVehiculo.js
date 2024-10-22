import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function DetallesVehiculo(){
    const [detallesVehiculo, setVehiculos] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [color, setColor] = useState('');
    const [cedula, setCedula] = useState('');
    const [tipoVehiculoId, setTipoVehiculoId] = useState('');
    const [tipoVehiculoNombre, setTipoVehiculoNombre] = useState('');
    const [tipoVehiculoActivo, setTipoVehiculoActivo] = useState('');
    const [clienteId, setClienteId] = useState('');
    const [clienteCedula, setClienteCedula] = useState('');
    const [clienteNombre, setClienteNombre] = useState('');
    const [clienteApellido, setClienteApellido] = useState('');
    const [clienteTelefono, setClienteTelefono] = useState('');
    const [clienteEmail, setClienteEmail] = useState('');
    const [clienteDireccion, setClienteDireccion] = useState('');
    //const [clienteId, setClienteId] = useState(vehiculo.cliente?.id || '');

    useEffect(
        () => {
            api.get(`/vehiculo/${id}`)
            .then(response => { 
                const vehiculo = response.data;
                setPlaca(vehiculo.placa);
                setModelo(vehiculo.modelo);
                setMarca(vehiculo.marca);
                setColor(vehiculo.color);
                setCedula(vehiculo.cedula);
                setTipoVehiculoId(vehiculo.tipovehiculo?.id || '');
                setTipoVehiculoNombre(vehiculo.tipovehiculo?.nombre || '');
                setTipoVehiculoActivo(vehiculo.tipovehiculo?.esactivo || '');
                setClienteId(vehiculo.cliente?.id || '');
                setClienteCedula(vehiculo.cliente?.cedula || '');
                setClienteNombre(vehiculo.cliente?.nombres || '');
                setClienteTelefono(vehiculo.cliente?.telefono || '');                
                setClienteEmail(vehiculo.cliente?.email || '');                
                setClienteDireccion(vehiculo.cliente?.direccion || '');    
            })
            .catch(error => 
                Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    text: `${error}`,
                    confirmButtonText: 'Cool'
                }));
        },
    []);

    // if(!detallesVehiculo){
    //     return <p>El vehiculo seleccionado no tiene información</p>
    // }
    return(
        <section>
            <header>
               <h3>Detalles de vehiculo</h3> 
                <p>A continuación de muestran los datos del vehiculo y su propiertario</p>
            </header>
            <div className="vehicles-details-wrapper">
                <div className="vehicles-details">
                    <div className="detail-item">
                        <h4 className="detail-title">Modelo</h4>
                        <p className="detail-desc">{modelo}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Placa</h4>
                        <p className="detail-desc">{placa}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Marca</h4>
                        <p className="detail-desc">{marca}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Color</h4>
                        <p className="detail-desc">{color}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Tipo vehiculo</h4>
                        <p className="detail-desc">{tipoVehiculoNombre}</p>
                    </div>
                </div>
                <div className="vehicle-detail-img">
                    <div className="icon-container">
                        <i className="bx bxs-car"></i>
                    </div>
                </div>
                
            </div>
            <div className="vehicles-details-wrapper custom">
                <h5>Propietario</h5>
                <div className="custom-container">

                    <div className="vehicles-details">
                        <div className="detail-item">
                            <h4 className="detail-title">Nombre</h4>
                            <p className="detail-desc">{clienteNombre + ' ' + clienteApellido}</p>
                        </div>
                        <div className="detail-item">
                            <h4 className="detail-title">Teléfono</h4>
                            <p className="detail-desc">{clienteTelefono}</p>
                        </div>
                        <div className="detail-item">
                            <h4 className="detail-title">Email</h4>
                            <p className="detail-desc">{clienteEmail}</p>
                        </div>
                        <div className="detail-item">
                            <h4 className="detail-title">Dirección</h4>
                            <p className="detail-desc">{clienteDireccion}</p>
                        </div>
                    </div>       
                    <div className="vehicle-detail-img">
                        <div className="icon-container">
                            <i className="bx bxs-user"></i>
                        </div>
                    </div>        

                </div>
                   
            </div>
            
        </section>
    );
}

export default DetallesVehiculo;