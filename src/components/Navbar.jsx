import React, { useState } from "react";
import "../css/nav.css"; // Asegúrate de que esta ruta sea correcta

export const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img 
                className="maria"
                    
                    src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704649478/B%C3%81SICO_IMAGOTIPO_HZT-VECTORIZADO_qird7m.png"
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={toggleDropdown}>
                                Servicios y Productos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#destino8">
                                Blog/Noticias
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {dropdownOpen && (
            <div  className={`image-container21 ${dropdownOpen ? "show" : ""}`}>
                <a href="#destino4" className="pepe35" >
                    <img className="mendiza"  src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704970634/Sin_t%C3%ADtulo-15__1_-removebg-preview_1_jrbgne.png" alt="Imagen 1" />
                </a>
                <a href="#destino4" className="pepe35" >
                <img className="mendiza"  src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1703775570/ENERGIA_IMAGOTIPO_VERDE_HZTL_VECTORIZADO_tabcyz.png" alt="Imagen 2" />
                </a>
                <a href="https://kiwih.org/"  >
                <img className="mendiza1"  src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1705322322/Kiwih_By_Criptosasun_uzwe3e.png" alt="Imagen 3" />
                </a>
                 
            </div>
        )}
    </>
);
};

export default  Navbar;


