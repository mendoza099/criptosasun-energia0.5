import React from 'react';
import '../css/homecard2.css';

const HomeCard2 = () => {
    return (
        <div className="gale">
            <div className="mario">
                <div className="infoSectionCustom" id="adaptiveSystems">
                    <h2 className='headerCustom'>Batería Virtual</h2>
                    <p className='textCustom'>
                        <ul>
                            <li>Sistema adaptativo operando en el mercado eléctrico.</li>
                            <li>Estrategia de arbitraje entre los tres segmentos del mercado.</li>
                            <li>Modelo de negocio 50-50 con los socios/clientes del mercado.</li>
                            <li>Enfocado a apalancar las inversiones en sistemas reversibles como son los Sistemas híbridos, cargadores de vehículos eléctricos. etc...</li>
                        </ul>
                    </p>
                </div>
                <img src="https://res.cloudinary.com/dwkb2dk5r/image/upload/c_scale,w_300/v1705177484/Dise%C3%B1o_sin_t%C3%ADtulo__5___1_-removebg-preview_yeyq1h.png" alt="" className="mendo" />
            </div>

            <div className="mario2">

                <img src="https://res.cloudinary.com/dwkb2dk5r/image/upload/c_scale,w_300/v1705177226/Dise%C3%B1o_sin_t%C3%ADtulo_7_1_ajutgk.png" alt="" className="mendo" />
                <div className="infoSectionCustom" id="adaptiveSystems">
                    <h2 className='headerCustom'>Quantum Market</h2>
                    <p className='textCustom'>
                        <ul>
                            <li>Infraestructura de Mercado orientada a la obtención de una licencia de Sistema Multilateral de Negociación.</li>
                            <li>Protocolo de pruebas establecido con la CNMV en el Sandbox de la Dirección General del Tesoro.</li>
                            <li>Utiliza la arquitectura NQT para conseguir un sistema de transacciones descentralizado.</li>
                            <li>Sistema transaccional con igualdad de condiciones para todos los intervinientes en el mercado.</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="mario3">
                <div className="infoSectionCustom" id="adaptiveSystems">
                    <h2 className='headerCustom'>Kiwih</h2>
                    <p className='textCustom'>
                        <ul>
                            <li>Es una estructura financiera innovadora con el objetivo de posibilitar a los inversores minoristas un nuevo instrumento financiero para invertir en los mercados energéticos. </li>
                            <li>El instrumento se basa en la titulización de Hidrogeno almacenado.</li>
                            <li>El valor del título denominado Kiwih es equivalente a 30 gramos de hidrogeno o 1 KWh de energía.</li>
                            <li>El Kiwih cotizara en el Quantum Market.</li>
                            <li>Primer vehículo de inversión mundial para poder invertir directamente en activos energéticos.</li>
                        </ul>
                    </p>
                </div>
                <a href="https://kiwih.org/">
                    <img src="https://res.cloudinary.com/dwkb2dk5r/image/upload/c_scale,w_300/v1705322322/Kiwih_By_Criptosasun_uzwe3e.png" alt="" className="mendo1" />
                </a>
            </div>


        </div>
    );
};

export default HomeCard2;
