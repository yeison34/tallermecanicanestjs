import React, { useEffect, useState } from "react";
import api from "../../axiosConfig";
import Empledo from "./Empleado";
import { Link } from "react-router-dom";

function EmpleadoMain() {
    return (
        <main>
            <header className="header">
                <h2>EMPLEADOS</h2>
                <p>
                    Listado de Empleados registrados en el taller.
                </p>
            </header>

            <section className="table-wrapper">
                <div className="sections-wrapper">
                    <Link className="link-section" to="/empleados/crear">
                        <div className="module">
                            <div className="module-container-image">
                                <div className="module-img">
                                    <i className="bx bx-plus icon"></i>
                                </div>
                            </div>
                            <div className="text-container">
                                <span className="module-text">
                                    Crear un empleado
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link className="link-section" to="/empleados/listar">
                        <div className="module">
                            <div className="module-container-image">
                                <div className="module-img">
                                    <i className="bx bx-list-ol icon"></i>
                                </div>
                            </div>
                            <div className="text-container">
                                <span className="module-text">
                                    Ver todos los empleados
                                </span>
                            </div>
                        </div>
                    </Link>
                    {/* <Link className="link-section" to="/vehiculos/vehiculoscliente">
                <div className="module">
                    <div className="module-container-image">
                        <div className="module-img">
                            <i className="bx bx-body icon"></i>
                        </div>
                    </div>
                    <div className="text-container">
                        <span className="module-text">Vehiculos por cliente</span>
                    </div>
                </div>
            </Link> */}
                </div>
            </section>
        </main>
    );
}

export default EmpleadoMain;
