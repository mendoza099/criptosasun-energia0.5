import React from 'react';
import '../css/braininfocomponent.css'; // Asegúrate de que el archivo CSS está en el mismo directorio que tu componente

const BrainInfoComponent = () => {
    return (
        <div className="container42">



            <div className="info">
                <div className="info-section" id="mca">
                    <h2 className='icononos '>Sistemas adaptativos</h2>
                    <p className='textoicononos1'>  <ul>
                        <li>Sistemas que adaptan su forma de actuar en respuesta a cambios ambientales.</li>
                        <li>El cambio adaptativo se enfoca a la consecución de una meta u objetivo.</li>


                    </ul></p>
                </div>


                <div className="info-section" id="dispositivos">
                    <h2 className='icononos '>Mapas Cognitivos Artificiales (MCA) </h2>
                    <p className='textoicononos2'> <ul>
                        <li>Representación de las relaciones entre entornos complejos y la conducta de los agentes.</li>
                        <li>Evolución basada en Aprendizaje Reforzado y Algoritmos Genéticos.</li>
                        <li>Estructura apoyada en la Teoria de Categorías.</li>

                    </ul></p>
                </div>


                <div className="info-section" id="sistemas">
                    <h2 className='icononos '>Dispositivos Neuro-Cuánticos<br></br>
                    </h2><p className='tamaño'>NeuroQuantum Transcender (NQT)</p>
                    <ul>
                        <li>Revolución
                            en la computación Neuromórfica</li>
                        <li>Procesamiento de la información basado en la Teoría de Campos Topológicos Cuánticos.</li>
                        <li>Más allá de la computación Cuántica y Neuronal.</li>

                    </ul>
                </div>
            </div>
        </div>

    );
};

export default BrainInfoComponent;
