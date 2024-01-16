import React, { useState } from "react";
import '../css/blog.css'; // Importa el archivo CSS para estilos

const Blog = () => {
    // Estados para controlar si el texto está expandido o no en cada sección
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);

    // Funciones para cambiar el estado de cada sección
    const toggleText1 = () => {
        setIsExpanded1(!isExpanded1);
    };

    const toggleText2 = () => {
        setIsExpanded2(!isExpanded2);
    };

    return (
        <div className="totalcuantica">
            <div className="blog-container">
                {/* Primer Bloque */}
                <div className="blog-section">
                    <div className="blog-image">
                        <img className="jorgito34" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1705347654/DALL_E_2024-01-10_23.29.13_-_Una_representaci%C3%B3n_minimalista_y_abstracta_en_3D_del_concepto__Quantum_Market_._La_imagen_debe_evocar_un_mercado_futurista_e_innovador__utilizando_ele-removebg-preview_cpfkop.png" alt="Descripción imagen" />
                    </div>
                    <div className="blog-content">
                        <div className={`blog-text ${isExpanded1 ? 'expanded' : 'collapsed'}`}>
                            <p className="angelito22">Los complejos algoritmos matemáticos son los que custodian bajo mucho más de siete llaves los más importantes secretos políticos, militares y económicos de gran parte de los gobiernos y organizaciones internacionales, las patentes y procesos de fabricación críticos de las grandes corporaciones industriales, así como los accesos a las cuentas multimillonarias de las entidades financieras más prestigiosas.

                                Son también los códigos que protegen los protocolos de seguridad de las criptomonedas y de las firmas digitales con las que las instituciones oficiales y los particulares llevan a cabo sus transacciones electrónicas.

                                Romper los códigos algorítmicos en formato RSA es el empeño de las compañías tecnológicas de vanguardia de Estados Unidos, China, Rusia, Alemania, Francia y otras naciones y el motivo por el que invierten cada año cientos de millones de dólares, euros o yens en una desenfrenada carrera contra reloj para obtener la nueva piedra filosofal que les permita ser los primeros en descifrar los secretos mejor guardados.<a href="https://www.elradar.es/tecnologias-cuanticas-criptosasun-utiliza-las-redes-neuronales-para-desencriptar-las-claves-privadas-del-rsa/" className="enlace-sitio-web">Visitar sitio web</a>.</p>
                        </div>
                        <button onClick={toggleText1} className="buttonSaberMas">
                            {isExpanded1 ? 'Ver Menos' : 'Saber Más'}
                        </button>
                    </div>
                </div>

                {/* Segundo Bloque */}
                <div className="blog-section">
                    <div className="blog-image">
                        <img className="jorgito34" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1705177485/Dise%C3%B1o_sin_t%C3%ADtulo__1_-removebg-preview_j2hrcm.png" alt="Descripción imagen" />
                    </div>
                    <div className="blog-content">
                        <div className={`blog-text ${isExpanded2 ? 'expanded' : 'collapsed'}`}>
                            <p className="angelito22">Hoy en día se habla por todas partes del mundo algorítmico
                                y sin embargo el mundo no es algorítmico en absoluto.
                                Un algoritmo es un proceso en el que los diferentes pasos se dan de una manera determinística. Lo que quiere decir que cada paso está plenamente predeterminado o predefinido.
                                Sin embargo, El Mundo y los seres vivos no actúan así
                                La idea por tanto es que más allá de los algoritmos podemos a su vez establecer dos tipos de procesos
                                los procesos probabilísticos y los procesos estocásticos
                                Un proceso probabilístico es aquel en el que los diferentes pasos se establecen de acuerdo con una determinada probabilidad.
                                Un proceso estocástico es aquél que conlleva elementos de incertidumbre a los que no se puede asociar ninguna probabilidad.
                                Y el mundo es plenamente estocástico.
                                Nuestros procesos Neuro-Cuánticos están basados precisamente en procesos estocásticos plenamente en concordancia con la evolución del mundo natural.</p>
                        </div>
                        <button onClick={toggleText2} className="buttonSaberMas">
                            {isExpanded2 ? 'Ver Menos' : 'Saber Más'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
