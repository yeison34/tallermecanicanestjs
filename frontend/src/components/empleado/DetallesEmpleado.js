import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function DetallesEmpleado() {
    const [detallesEmpleado, setEmpleado] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    const [cedula, setCedula] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [fechaingreso, setFechaingreso] = useState(new Date().toISOString().substring(0, 10));
    const [especialidadid, setEspecialidadid] = useState(0);

    const headersNgrok = {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        "Access-Control-Allow-Origin": "*",
    };

    useEffect(() => {
        api.get(`/empleado/${id}`, {
            headers: headersNgrok,
        })
            .then((response) => {
                const empleado = response.data;
                setCedula(empleado.cedula);
                setNombres(empleado.nombres);
                setApellidos(empleado.apellidos);
                setTelefono(empleado.telefono);
                setEmail(empleado.email);
                setDireccion(empleado.direccion);
                setFechaingreso(empleado.fechaingreso);
                setEspecialidadid(empleado.especialidad?.nombre || "");
            })
            .catch((error) =>
                Swal.fire({
                    title: "Error!",
                    icon: "error",
                    text: `${error}`,
                    confirmButtonText: "Cool",
                })
            );
    }, []);

    return (
        <section>
            <header>
                <h3>Detalles del Empleado</h3>
                <p>A continuación se muestran los datos del empleado</p>
            </header>
            <div className="vehicles-details-wrapper">
                <div className="vehicles-details">
                    <div className="detail-item">
                        <h4 className="detail-title">Cedula</h4>
                        <p className="detail-desc">{cedula}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Nombres</h4>
                        <p className="detail-desc">{nombres}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Apellidos</h4>
                        <p className="detail-desc">{apellidos}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Telefono</h4>
                        <p className="detail-desc">{telefono}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Email</h4>
                        <p className="detail-desc">{email}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Direccion</h4>
                        <p className="detail-desc">{direccion}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Fecha Ingreso</h4>
                        <p className="detail-desc">{fechaingreso}</p>
                    </div>
                    <div className="detail-item">
                        <h4 className="detail-title">Especialidad</h4>
                        <p className="detail-desc">{especialidadid}</p>
                    </div>
                </div>
                <div className="vehicle-detail-img">
                    <div className="icon-container">
                        <div className="col-12 mb-4">
                            <i className="bx bxs-user-account"></i>
                            <a
                                className="btn btn-success"
                                href="/empleados/listar">
                                Regresar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetallesEmpleado;
