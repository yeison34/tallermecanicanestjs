import React, { useState } from "react"; 
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function CrearCliente() {
    const [cliente, setCliente] = useState({
        cedula: '',
        nombres: '',
        apellidos: '',
        telefono: '',
        email: '',
        direccion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async () => {
        // Validación de campos obligatorios
        if (!cliente.cedula || !cliente.nombres || !cliente.apellidos || !cliente.email) {
            return Swal.fire("Error", "Todos los campos son obligatorios", "error");
        }

        // Validación del formato del email
        if (!isValidEmail(cliente.email)) {
            return Swal.fire("Error", "El correo no es válido", "error");
        }

        Swal.fire({
            title: "¿Está seguro de confirmar esta acción?",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await api.post('/clientes', cliente);
                    Swal.fire("Éxito", "Cliente creado exitosamente", "success");
                    window.location.href = "/clientes/listar";
                } catch (error) {
                    // Manejo de errores específicos
                    if (error.response) {
                        // Si la respuesta tiene un estado de conflicto (409)
                        if (error.response.status === 409) {
                            Swal.fire("Error", error.response.data.message || "Ese cliente ya fue creado", "error");
                        } else {
                            Swal.fire("Error", `No se pudo crear el cliente: ${error.message}`, "error");
                        }
                    } else {
                        Swal.fire("Error", "Error de conexión al servidor", "error");
                    }
                }
            }
        });
    };

    return (
        <div className="container-fluid">
            <h2>Crear nuevo cliente</h2>
            <div className="row">
                <div className="col-6 mb-3">
                    <label htmlFor="cedula" className="form-label">Cédula</label>
                    <input type="text" id="cedula" className="form-control" placeholder="Cédula" name="cedula" value={cliente.cedula} onChange={handleChange} required />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="nombres" className="form-label">Nombres</label>
                    <input type="text" id="nombres" className="form-control" placeholder="Nombres" name="nombres" value={cliente.nombres} onChange={handleChange} required />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="apellidos" className="form-label">Apellidos</label>
                    <input type="text" id="apellidos" className="form-control" placeholder="Apellidos" name="apellidos" value={cliente.apellidos} onChange={handleChange} required />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="text" id="telefono" className="form-control" placeholder="Teléfono" name="telefono" value={cliente.telefono} onChange={handleChange} />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Email" name="email" value={cliente.email} onChange={handleChange} required />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" id="direccion" className="form-control" placeholder="Dirección" name="direccion" value={cliente.direccion} onChange={handleChange} />
                </div>
            </div>
            <button className="btn btn-primary" type="button" onClick={handleSubmit}>Guardar</button>
        </div>
    );
}

export default CrearCliente;
