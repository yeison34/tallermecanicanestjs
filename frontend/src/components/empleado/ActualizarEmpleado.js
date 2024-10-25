import React, { useEffect, useState } from "react";
import api from "../../axiosConfig";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

function ActualizarEmpleado() {
    const { id } = useParams();

    const [cedula, setCedula] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [fechaingreso, setFechaingreso] = useState(new Date().toISOString().substring(0, 10));
    const [tiposEspecialidad, setTiposEspecialidad] = useState([]);
    const [especialidadid, setEspecialidadid] = useState(0);

    const headersNgrok = {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        "Access-Control-Allow-Origin": "*",
    };

    useEffect(() => {
        api.get("/especialidad", {
            headers: headersNgrok,
        })
            .then((response) => setTiposEspecialidad(response.data))
            .catch((error) => console.error("Error: ", error));

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
                // setEspecialidadid(empleado.especialidad?.nombre || "");
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

    const handleSubmit = async () => {
        if (
            console.log("entro"),
            cedula == '' ||
            nombres == "" ||
            apellidos == "" ||
            telefono == "" ||
            email == "" ||
            direccion == "" ||
            fechaingreso == "" ||
            especialidadid == 0
        ) {
            return Swal.fire({
                title: "Registrar todos los campos!",
                icon: "error",
                text: `Para confirmar el registro debe diligenciar todos los campos`,
                confirmButtonText: "Cerrar",
                allowOutsideClick: false,
            });
        }

        const actualizarEmpleado = {
            cedula ,
            nombres,
            apellidos,
            telefono,
            email,
            direccion,
            fechaingreso,
            especialidadid: { id: especialidadid },
        };
        console.log(actualizarEmpleado);
        Swal.fire({
            title: "Esta seguro de confirmar esta acción?",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                api.put(`/empleado/${id}`, actualizarEmpleado)
                    .then((response) => {
                        Swal.fire({
                            title: "Empleado actualizado",
                            icon: "success",
                            text: `Transacción correcta`,
                            confirmButtonText: "Cerrar",
                        }).then((res) => {
                            window.location.href = `/empleados/detalles/${id}`;
                        });
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
            } else if (result.isDenied) {
                return;
            }
        });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <h2>Actualizar Empleado</h2>
                <div className="col-6 mb-3">
                    <label htmlFor="cedula" className="form-label">
                        Cedula
                    </label>
                    <input
                        type="text"
                        id="cedula"
                        className="form-control"
                        placeholder="Cedula"
                        value={cedula}
                        readOnly
                        required
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="nombres" className="form-label">
                        Nombres
                    </label>
                    <input
                        type="text"
                        id="nombres"
                        className="form-control"
                        placeholder="Nombres"
                        value={nombres}
                        onChange={(e) => {
                            setNombres(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="apellidos" className="form-label">
                        Apellidos
                    </label>
                    <input
                        type="text"
                        id="apellidos"
                        className="form-control"
                        placeholder="Apellidos"
                        value={apellidos}
                        onChange={(e) => {
                            setApellidos(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="telefono" className="form-label">
                        Telefono
                    </label>
                    <input
                        type="text"
                        id="telefono"
                        className="form-control"
                        placeholder="Telefono"
                        value={telefono}
                        onChange={(e) => {
                            setTelefono(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="direccion" className="form-label">
                        Direccion
                    </label>
                    <input
                        type="text"
                        id="direccion"
                        className="form-control"
                        placeholder="Direccion"
                        value={direccion}
                        onChange={(e) => {
                            setDireccion(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="fechaingreso" className="form-label">
                        Fecha Ingreso
                    </label>
                    <input
                        type="date"
                        id="fechaingreso"
                        className="form-control"
                        placeholder="Fecha Ingreso"
                        value={fechaingreso}
                        onChange={(e) => {
                            setFechaingreso(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="especialidad">Especialidad:</label>
                    <select
                        id="especialidad"
                        className="form-select"
                        onChange={(e) => {
                            setEspecialidadid(+e.target.value);
                        }}>
                        <option disabled selected value>
                            {" "}
                            -- Seleccione un tipo de especialidad --{" "}
                        </option>
                        {tiposEspecialidad.map((especialidad) => (
                            <option
                                key={especialidad.id}
                                value={especialidad.id}>
                                {especialidad.nombre}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}>
                Guardar
            </button>
            <a className="btn btn-warning" href="/empleados/listar">
                Cancelar
            </a>
        </div>
    );
}

export default ActualizarEmpleado;
