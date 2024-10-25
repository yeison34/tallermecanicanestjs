import React from "react";
import { Link } from "react-router-dom";

function TipoVehiculoMain() {
  return (
    <main>
      <header className="header">
        <h2>Tipos de Vehículos</h2>
        <p>Gestiona los tipos de vehículos que el taller puede trabajar.</p>
      </header>

      <section className="table-wrapper">
        <div className="sections-wrapper">
          <Link className="link-section" to="/tipovehiculo/crear">
            <div className="module">
              <div className="module-container-image">
                <div className="module-img">
                  <i className="bx bx-plus icon"></i>
                </div>
              </div>
              <div className="text-container">
                <span className="module-text">Crear un Tipo de Vehículo</span>
              </div>
            </div>
          </Link>
          <Link className="link-section" to="/tipovehiculo/listar">
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
        </div>
      </section>
    </main>
  );
}

export default TipoVehiculoMain;
