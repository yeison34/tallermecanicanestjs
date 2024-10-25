import React, { useState } from "react"; 
import api from "../../axiosConfig";
import Swal from "sweetalert2";

function CrearEspecialidad() {
    const [especialidad, setEspecialidad] = useState({
        nombre: '',
        sueldo: '',
        estado: '',
      
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEspecialidad({ ...especialidad, [name]: value });
    };

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async () => {
        // Validación de campos obligatorios
        if (!especialidad.nombre || !especialidad.sueldo || !especialidad.estado) {
            return Swal.fire("Error", "Todos los campos son obligatorios", "error");
        }


        Swal.fire({
            title: "¿Está seguro de confirmar esta acción?",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await api.post('/especialidad', especialidad)
                    .then(response => {
                        Swal.fire("Éxito", "Especialidad creado exitosamente", "success");
                        window.location.href = `/especialidades/detalles/${response.data.id}`;

                    });
                } catch (error) {
                    // Manejo de errores específicos
                    if (error.response) {
                        // Si la respuesta tiene un estado de conflicto (409)
                        if (error.response.status === 409) {
                            Swal.fire("Error", error.response.data.message || "Ese especialidad ya fue creado", "error");
                        } else {
                            Swal.fire("Error", `No se pudo crear el especialidad: ${error.message}`, "error");
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
            <h2>Crear nueva especialidad</h2>
            <div className="row">
                <div className="col-6 mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" id="nombre" className="form-control" placeholder="Nombre" name="nombre" value={especialidad.nombre} onChange={handleChange} required />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="sueldo" className="form-label">Sueldo</label>
                    <input type="number" id="sueldo" className="form-control" placeholder="Sueldo" name="sueldo" value={especialidad.cedula} onChange={handleChange} required />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="apellidos" className="form-label">Estado</label>
                    <div className="mb-3 form-check">
                        <input
                        type="checkbox"
                        className="form-check-input"
                        id="estado"
                        name="estado"
                        checked={especialidad.estado}
                        onChange={() => setEspecialidad({ ...especialidad, estado: !especialidad.estado })}
                        />
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" type="button" onClick={handleSubmit}>Guardar</button>
        </div>
    );
}

export default CrearEspecialidad;
