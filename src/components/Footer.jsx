
import React, { Component } from "react";
import "../css/footer.css";

export const Footer = () => (
	<div className="final">

	<img src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704970641/Sin_t%C3%ADtulo-2__2_-removebg-preview_via5ey.png" alt="Imagen Izquierda" className="imagen11" />
	<p className="texto43">Aviso legal
		Política de privacidad
		Política de cookies <p className="texto44">© 2023 Criptosasun S.L..U. All rignts reserved.</p>
	</p>


	<div
		className="simbolo"
		title="Sello PYME INNOVADORA 21/11/2026"
		style={{ width: '238px', textAlign: 'center' }}
	>
		<a
			style={{ textDecoration: 'none' }}
			target="_blank"
			rel="noopener noreferrer"

		>
			<div>
				<img className="final45" 
					alt="Sello PYME INNOVADORA 21/11/2026"
					src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704992199/sello_1_sm2aky.jpg"
				/>
			</div>
			<div
				style={{
					color: '#000000',
					textDecoration: 'none',
					marginTop: '10px',
					marginBottom: '10px'
				}}
			>
				<div className="teriminar" >
					PYME INNOVADORA
				</div>
				<div style={{ fontSize: '10px' }}>
					Válido hasta el 21 de noviembre de 2026
				</div>
			</div>
			<div>
				<img
				 className="final455"
					
					alt="escudo de MEIC 21/11/2026"
					src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704992417/escudo_1_ez7mxm.jpg"
				/>
			</div>
		</a>
	</div>

</div>
);