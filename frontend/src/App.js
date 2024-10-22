import logo from './logo.svg';
import React, {useState}from 'react';
import './App.css';
import ClienteMain from './components/cliente/ClienteMain';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/ui-components/Navbar';
import VehiculoMain from './components/vehiculo/VehiculoMain';
import TipoVehiculoMain from './components/tipovehiculo/TipoVehiculoMain';
import Vehiculo from './components/vehiculo/Vehiculo';
import DetallesVehiculo from './components/vehiculo/DetallesVehiculo';
import CrearVehiculo from './components/vehiculo/CrearVehiculo';
import ActualizarVehiculo from './components/vehiculo/ActualizarVehiculo';

function App() {
  const [selectedClienteId, setSelectedClienteId] = useState(null)
  return (
    <Router>
      <div>
        <Navbar/>
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<h2>Esta es una app</h2>}/>
            <Route path='/clientes' element={<ClienteMain/>}/>
            <Route path='/vehiculos' element={<VehiculoMain/>}/>
            <Route path='/tiposvehiculo' element={<TipoVehiculoMain/>}/>
            
            <Route path='/vehiculos/actualizar/:id' element={<ActualizarVehiculo/>}/>
            <Route path='/vehiculos/crear' element={<CrearVehiculo/>}/>
            <Route path='/vehiculos/listar' element={<Vehiculo/>}/>
            <Route path='/vehiculos/detalles/:id' element={<DetallesVehiculo/>}/>

          </Routes>
        </div>
      </div>
    </Router>
    // <div className="App">
    //   <h1>Taller mecánico</h1>
    //   <Cliente onSelectCliente={setSelectedClienteId}></Cliente>
    // </div>
  );
}

export default App;