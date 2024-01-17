import React, { useState } from "react";
import '../css/blog.css';

const Blog = () => {
    const [isFlipped, setIsFlipped] = useState({
        card1: false,
        card2: false,
    });

    // Función para cambiar el estado de girado de una tarjeta específica
    const toggleFlip = (cardKey) => {
        setIsFlipped(prevState => ({ ...prevState, [cardKey]: !prevState[cardKey] }));
    };
    return (
        <div className="totalcuantica">
            <div className="blog-container">

                <div className={`flip-card ${isFlipped.card1 ? 'is-flipped' : ''}`} onMouseEnter={() => toggleFlip('card1')} onMouseLeave={() => toggleFlip('card1')}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            Procesos probabilísticos y Procesos estocásticos
                        </div>
                        <div className="flip-card-back">
                            <p className="felix1"> Hoy en día se habla por todas partes del mundo algorítmico
                                Y sin embargo El Mundo no es algorítmico en absoluto.
                                Un algoritmo es un proceso en el que los diferentes pasos se dan de una manera determinística. Lo que quiere decir que cada paso está plenamente predeterminado o predefinido.
                                Sin embargo, El Mundo y los seres vivos no actúan así
                                La Idea por tanto es que más allá de los algoritmos podemos a su vez establecer dos tipos de procesos
                                Los procesos probabilísticos y los procesos estocásticos
                                Un proceso probabilístico es aquel en el que los diferentes pasos se establecen de acuerdo con una determinada probabilidad.
                                Un proceso estocástico es aquél que conlleva elementos de incertidumbre a los que no se puede asociar ninguna probabilidad.
                                Y el mundo es plenamente estocástico.
                                Nuestros procesos Neuro-Cuánticos están basados precisamente en procesos estocásticos plenamente en concordancia con la evolución del mundo natural.</p>

                        </div>
                    </div>
                </div>


                <div className={`flip-card ${isFlipped.card2 ? 'is-flipped' : ''}`} onMouseEnter={() => toggleFlip('card2')} onMouseLeave={() => toggleFlip('card2')}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        Las 100 mejores startups del año 2023
                        </div>
                        <div className="flip-card-back">
                            <p className="felix"> Se trata de 100 proyectos innovadores en ámbitos punteros que van desde la biotecnología a la inteligencia artificial pasando por energías limpias, telecomunicaciones, salud, espacio, automoción, semicondutores, agrotech, blockchain, software, etc.<br></br> 
                             <a href="https://apte.org/listado-apte-top-100-startups" target="_blank" rel="noopener noreferrer" className="external-link">
                                Saber más
                            </a></p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
