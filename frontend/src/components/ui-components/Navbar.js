import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

function Navbar(){

   useEffect(() => {
        let btn = document.getElementById("btn");
        let menu = document.querySelector(".menu");
        btn.onclick = () => menu.classList.toggle("menu--active");
        
   });
    return(
        <nav className="menu">
            <div className="logo">
                <div className="logo__img">
                    <i className='bx bxl-c-plus-plus'></i>
                </div>
                <div className="logo__name">Taller Mecánico</div>
            </div>
            <i className="bx bx-menu" id="btn"></i>
            <ul className="menu__list">
        
                <li className="menu__item">
                    <Link className="menu__link" to="/clientes">
                        <div className="menu__icon">
                            <i className="bx bx-body"></i>
                        </div>
                        <span className="menu__text">Clientes</span>
                    </Link>
                    <span className="menu__tooltip">Clientes</span>
                </li>
                <li className="menu__item"> 
                    <Link className="menu__link" to="/empleados">
                        <div className="menu__icon">
                            <i className="bx bx-user"></i>
                        </div>
                        <span className="menu__text">Empleados</span>
                    </Link>
                    <span className="menu__tooltip">Empleados</span>
                </li>
                <li className="menu__item">
                    <Link className="menu__link" to="/tiposvehiculo">
                        <div className="menu__icon">
                            <i className="bx bx-list-ul"></i>
                        </div>
                        <span className="menu__text">Tipos vehiculo</span>
                    </Link>
                    <span className="menu__tooltip">Tipos vehiculo</span>
                </li>
                <li className="menu__item">
                    <Link className="menu__link" to="/vehiculos">
                        <div className="menu__icon">
                            <i className='bx bx-car' ></i>
                        </div>
                        <span className="menu__text">Vehiculos</span>
                    </Link>
                    <span className="menu__tooltip">Vehiculos</span>
                </li>
                <li className="menu__item">
                    <Link className="menu__link" to="/especialidades">
                        <div className="menu__icon">
                            <i className='bx bx-grid-alt' ></i>
                        </div>
                        <span className="menu__text">Especialidades</span>
                    </Link>
                    <span className="menu__tooltip">Especialidades</span>
                </li>
            </ul>
            

            <div className="profile-container">
                <div className="profile">
                    {/* <img src="img/avatar.png" alt="" className="profile__avatar"> */}
                    <div className="profile__details">
                        <div className="profile__name">Lorem Ipsum</div>
                        <div className="profile__job">Lorem Ipsum</div>
                    </div>
                </div>
                <span className="profile__logout"><i className="bx bx-log-out"></i></span>
            </div>
        </nav>
    );
}

export default Navbar;