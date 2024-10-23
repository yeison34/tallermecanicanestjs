import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/ui-components/Navbar';
import VehiculoMain from './components/vehiculo/VehiculoMain';
import TipoVehiculoMain from './components/tipovehiculo/TipoVehiculoMain';
import Vehiculo from './components/vehiculo/Vehiculo';
import DetallesVehiculo from './components/vehiculo/DetallesVehiculo';
import CrearVehiculo from './components/vehiculo/CrearVehiculo';
import ActualizarVehiculo from './components/vehiculo/ActualizarVehiculo';
import CrearTipoVehiculo from './components/tipovehiculo/CrearTipoVehiculo';
import TipoVehiculoListar from './components/tipovehiculo/TipoVehiculoListar'; // Asegúrate de importar el componente
import DetallesTipoVehiculo from './components/tipovehiculo/DetallesTipoVehiculo'; // Componente de detalles
import ActualizarTipoVehiculo from './components/tipovehiculo/ActualizarTipoVehiculo';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='container mt-4'>
          <Routes>
            <Route path="/" element={<h2>Esta es una app</h2>} />
            <Route path="/vehiculos" element={<VehiculoMain />} />
            <Route path="/tiposvehiculo" element={<TipoVehiculoMain />} />
            <Route path="/tipovehiculo/crear" element={<CrearTipoVehiculo />} />
            <Route path="/tipovehiculo/listar" element={<TipoVehiculoListar />} /> 
            <Route path="/vehiculos/crear" element={<CrearVehiculo />} />
            <Route path="/vehiculos/listar" element={<Vehiculo />} />
            <Route path="/vehiculos/actualizar/:id" element={<ActualizarVehiculo />} />
            <Route path="/vehiculos/detalles/:id" element={<DetallesVehiculo />} />
            <Route path="/tipovehiculo/detalles/:id" element={<DetallesTipoVehiculo />} />
            <Route path="/tipovehiculo/actualizar/:id" element={<ActualizarTipoVehiculo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
