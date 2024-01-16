import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<img style={{ width: "20%", marginRight: "30%", marginLeft: "5cm" }} src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704649478/B%C3%81SICO_IMAGOTIPO_HZT-VECTORIZADO_qird7m.png" />
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">

						<li className="nav-item">
							<a className="nav-link" href="#destino4"><img className="manoloo267" href="#destino4" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/c_scale,w_150/v1704970634/Sin_t%C3%ADtulo-15__1_-removebg-preview_1_jrbgne.png" alt="" /></a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="#destino4"><img className="manoloo267" href="#destino4" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/c_scale,w_150/v1703775570/ENERGIA_IMAGOTIPO_VERDE_HZTL_VECTORIZADO_tabcyz.png" alt="" /></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://kiwih.org/" ><img className="manoloo267" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/c_scale,w_65/v1705322322/Kiwih_By_Criptosasun_uzwe3e.png" alt="" />KIWIH</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#destino8">BLOG/NOTICIAS</a>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
};