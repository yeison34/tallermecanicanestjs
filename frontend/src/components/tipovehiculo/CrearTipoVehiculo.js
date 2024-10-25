import React, { useState } from "react";
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function CrearTipoVehiculo() {
    const [nombre, setNombre] = useState('');
    const [esActivo, setEsActivo] = useState(true);

    const handleSubmit = async () => {
        // Validación del campo nombre
        if (nombre.trim() === '') {
            return Swal.fire({
                title: 'Falta completar el nombre',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            });
        }

        // Verificar si el tipo de vehículo ya existe
        try {
            const response = await api.get(`/tipovehiculo/nombre/${nombre}`);
            if (response.data) {
                return Swal.fire({
                    title: 'Tipo de vehículo existente',
                    text: 'Ya existe un tipo de vehículo con ese nombre. Por favor, elija otro.',
                    icon: 'warning',
                    confirmButtonText: 'Cerrar'
                });
            }
        } catch (error) {
            // Manejo de errores si la consulta falla
            console.error("Error al verificar el tipo de vehículo:", error);
        }

        const nuevoTipoVehiculo = { nombre, esActivo };

        // Confirmación antes de crear el tipo de vehículo
        Swal.fire({
            title: "¿Confirmar la creación?",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                api.post('/tipovehiculo', nuevoTipoVehiculo)
                    .then(() => {
                        Swal.fire({
                            title: 'Tipo de vehículo creado',
                            text: 'El tipo de vehículo ha sido creado exitosamente.',
                            icon: 'success',
                            confirmButtonText: 'Cerrar'
                        });
                        window.location.href = `/tipovehiculo/listar`;
                    })
                    .catch(error => {
                        // Manejo de errores al crear el tipo de vehículo
                        Swal.fire({
                            title: 'Error al crear el tipo de vehículo',
                            text: error.message,
                            icon: 'error',
                            confirmButtonText: 'Cerrar'
                        });
                    });
            }
        });
    };

    return (
        <div className="container">
            <h2>Crear Tipo de Vehículo</h2>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Nombre del tipo de vehículo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="esActivo"
                    checked={esActivo}
                    onChange={(e) => setEsActivo(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="esActivo">
                    ¿Está activo?
                </label>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
                Guardar
            </button>
        </div>
    );
}

export default CrearTipoVehiculo;
