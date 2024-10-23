import React, {useEffect, useState} from "react";
import api from "../../axiosConfig";
import Cliente from "./Cliente";

function ClienteMain() {
  
  return (
  <main>
    <header className="header">
        <h2>Clientes</h2>
        <p>Clientes registrados en nuestra plataforma</p>
    </header>

    <section className="table-wrapper">
        <div className="btn-wrapper">
            <button class="btn btn-success">Crear un cliente</button>

        </div>
        <Cliente/>
    </section>
  </main>)

}

export default ClienteMain;