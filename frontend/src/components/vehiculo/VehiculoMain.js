import React, {useEffect, useState} from "react";
import api from "../../axiosConfig";
import Vehiculo from "./Vehiculo";
import { Link } from "react-router-dom";


function VehiculoMain() {
  
  return (
  <main>
    <header className="header">
        <h2>Vehiculos</h2>
        <p>Listado de vehiculos registrados en el taller que corresponden a un cliente</p>
    </header>

    <section className="table-wrapper">
        <div className="sections-wrapper">
            <Link className="link-section" to="/vehiculos/crear">
                <div className="module">
                    <div className="module-container-image">
                        <div className="module-img">
                            <i className="bx bx-plus icon"></i>
                        </div>
                    </div>
                    <div className="text-container">
                        <span className="module-text">Crear un vehiculo</span>
                    </div>
                </div>
            </Link>
            <Link className="link-section" to="/vehiculos/listar">
                <div className="module">
                    <div className="module-container-image">
                        <div className="module-img">
                            <i className="bx bx-list-ol icon"></i>
                        </div>
                    </div>
                    <div className="text-container">
                        <span className="module-text">Ver todos los registros</span>
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
  </main>)

}

export default VehiculoMain;
