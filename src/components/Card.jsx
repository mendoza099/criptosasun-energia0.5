import React from 'react';
import '../css/card.css'; // Importa el archivo CSS para estilos

const Card = ({ }) => {
    return (
        <div className="image-card">
            <img className="img-incrustada" src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704904305/Sin_t%C3%ADtulo-2_1_rfkshh.png" alt={"imagen geometrica"} />
        </div>
    );
};

export default Card;
