import React from "react";
import { Link } from "react-router-dom";

function ClienteMain() {
  return (
    <main>
      <header className="header">
        <h2>Clientes</h2>
        <p>Gestiona los clientes del taller.</p>
      </header>

      <section className="table-wrapper">
        <div className="sections-wrapper">
          <Link className="link-section" to="/clientes/crear">
            <div className="module">
              <div className="module-container-image">
                <div className="module-img">
                  <i className="bx bx-plus icon"></i>
                </div>
              </div>
              <div className="text-container">
                <span className="module-text">Crear un Cliente</span>
              </div>
            </div>
          </Link>

          <Link className="link-section" to="/clientes/listar">
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

export default ClienteMain;
