import React, {useEffect, useState} from "react";
import api from "../../axiosConfig";
import TipoVehiculo from "./TipoVehiculo";

function TipoVehiculoMain() {
  
  return (
  <main>
    <header className="header">
        <h2>Tipos de vehiculos</h2>
        <p>Tipos de vehiculos con los que el taller está capacitado trabajar</p>
    </header>

    <section className="table-wrapper">
        <div className="btn-wrapper">
            <button class="btn btn-success">Crear un tipo de vehiculo</button>
        </div>
        <TipoVehiculo/>
    </section>
  </main>)

}

export default TipoVehiculoMain;