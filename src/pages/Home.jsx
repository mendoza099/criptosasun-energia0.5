import React, { useState } from "react";
import "../css/home.css"
import Card from "../components/Card.jsx";
import BrainInfoComponent from "../components/BrainInfoComponent.jsx";
import HomeCard2 from "../components/HomeCard2.jsx";
import CardTrabajadores from "../components/CardTrabajadores.jsx";
import Blog from "../components/Blog.jsx";
import ContactForm from "../components/ContactForm.jsx";
export const Home = () => {
	const [componenteActivo, setComponenteActivo] = useState(null);
	return (


		
		<><div className="pag1">
			
			<div className="inicio">

			<p className="titulo1">Boosting the Qubit revolution</p>

			<div className="contenedor1">
				<div className="cuadro1">


					<p className="parrafo1">El gran paso a la revolución del mundo con <strong>tecnología de vanguardia </strong>.</p>
					<p className="texto2">Uniendo los mundos  de las <strong>redes neuronales</strong>  y la <strong> computación cuántica</strong> .
					</p>


				</div>


				<div className="texto1">


					<Card />

				</div>

			</div>



			<div className="parte2" >

				<img className="titulo-imagen" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704649490/B%C3%81SICO_ISOTIPO-VECTORIZADO_phclc2.png" alt="¿Qué es criptosasun?" />
				<p className="titulo1">¿Qué es Criptosasun?</p>
				<p className="titulo2">Criptosasun es una startup innovadora que nació a finales del 2021 con una visión: aplicar la
					Inteligencia Artificial (IA) a diferentes sectores para optimizar los procesos y generar valor.</p>

				<div className="titulo3">
					<iframe className="triangulo" width="560" height="315" src="https://www.youtube.com/embed/-cr9DzMvInM?si=u3BMVvxtm3hEBsW8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
					<p className="titulo4">Nuestro <strong>objetivo</strong>  es desarrollar sistemas que generen <strong>riqueza</strong> para toda la
						sociedad, a través de la <strong>tecnología</strong>.<br></br>
						SABEMOS que <strong>el futuro se construye cada día</strong>, y esa es la ilusión que ilumina
						nuestro trabajo.<br></br>
						CREEMOS en la <strong>honestidad</strong> , el <strong>trabajo</strong> , el <strong>esfuerzo</strong> , la <strong>constancia</strong> , y el
						<strong> compromiso</strong> , como pilares de nuestra empresa.<br></br>
						QUEREMOS formar parte del desarrollo de las personas, las instituciones y la
						sociedad, contribuyendo a <strong>crear un mundo cada vez más sostenible</strong> .</p>

				</div>
			</div>


			<div className="parte3">
						<img
							className="titulo-imagen"
							src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704649490/B%C3%81SICO_ISOTIPO-VECTORIZADO_phclc2.png"
							alt="¿Qué es criptosasun?"
						/>
						<p className="titulo1" id="destino4">Líneas de negocio</p>

						<div className="logotipo1">
							<div className="imagen-boton">
								<a onClick={() => setComponenteActivo("BrainInfoComponent")}>
									<img
										className="logo1"
										src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704969635/Sin_t%C3%ADtulo-17__1_-removebg-preview_1_swbunl.png"
										alt="Ir a la sección destino"
									/>
								</a>
								<button className="buttonSaberMas1" onClick={() => setComponenteActivo("BrainInfoComponent")}>Saber Más</button>
							</div>

							<div className="imagen-boton">
								<a onClick={() => setComponenteActivo("HomeCard2")}>
									<img
										className="logo1"
										src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1703775571/ENERG%C3%8DA_IMAGOTIPO_VERDE_VERTICAL-VECTORIZADO_vei0yd.png"
										alt="Ir a la sección destino"
									/>
								</a>
								<button className="buttonSaberMas" onClick={() => setComponenteActivo("HomeCard2")}>Saber Más</button>
							</div>
						</div>
					</div>


					<div >
						{componenteActivo === "BrainInfoComponent" && <BrainInfoComponent />}
						{componenteActivo === "HomeCard2" && <HomeCard2 />}
					</div>
					<div className="parte4" id="destino5">
						<img className="equuipo23" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704649490/B%C3%81SICO_ISOTIPO-VECTORIZADO_phclc2.png" alt="¿Qué es criptosasun?" />
						<p className="titulo1">El equipo</p>

					</div>
					<div className="espacio-trabajadores" >
						<CardTrabajadores />
					</div>

					<div className="parte4" >
						<img className="titulo-imagen" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704649490/B%C3%81SICO_ISOTIPO-VECTORIZADO_phclc2.png" alt="¿Qué es criptosasun?" />
						<p className="titulo1">¿Por qué elegir Criptosasun?</p>

					</div>

					<div className="colocacionparte4">

						<img className="adaptabilidad" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1703268560/Sin_t%C3%ADtulo-6__1_-removebg-preview_1_1_djru1z.png" alt="" />
						<p className="parrafo11">Reconocemos
							la <strong>singularidad</strong> de cada cliente y
							diseñamos <strong>soluciones tecnológicas</strong>  a medida
							para satisfacer sus <strong> necesidades específicas</strong>.</p>
					</div>



					<div className="colocacionparte4">


						<p className="parrafo12">Entendemos
							la importancia de <strong>proteger tus
								datos e información</strong> por lo que incorporamos
							los <strong>protocolos de seguridad </strong>más robustos y las
							tecnologías de <strong>cifrado avanzadas</strong>.
						</p>
						<img className="adaptabilidad21" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1703268580/recurso_seguridad_1_z1hlpp.png" alt="" />
					</div>
					<div className="textoequipo">
						<p>Nuestro equipo de expertos está listo para llevar tus ideas a la realidad. No importa el
							tamaño o la complejidad de tu proyecto, nos comprometemos a proporcionar soluciones
							de alta calidad que cumplen con tus objetivos y superan tus expectativas.¡Ponte en contacto con nosotros hoy para comenzar!

						</p>
					</div>
					<div className="noticias" id="destino8">
						<img className="contacto" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704649490/B%C3%81SICO_ISOTIPO-VECTORIZADO_phclc2.png" alt="¿Qué es criptosasun?" />
						<p className="titulo1">Blog/Noticias</p>
						<Blog />
					</div>
					<div className="colocarFormulario">
						<img className="contacto" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704649490/B%C3%81SICO_ISOTIPO-VECTORIZADO_phclc2.png" alt="¿Qué es criptosasun?" />
						<p className="titulo1">¿Cómo podemos ayudarte hoy?</p>
						<ContactForm />
					</div>

		</div>
		</div>
		</>
	);
}; 