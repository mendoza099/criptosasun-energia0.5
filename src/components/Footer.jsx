import React from "react";
import "../css/footer.css";

export const Footer = () => (
  <div className="final">
    {/* Imagen extra agregada a la izquierda */}
    <img
      src="https://res.cloudinary.com/dzrp12vse/image/upload/v1727351158/EN_FundedbytheEU_RGB_NEG_skszxi.png"
      alt="Nueva Imagen Izquierda"
      className="imagen11"
    />
    <img
      src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704970641/Sin_t%C3%ADtulo-2__2_-removebg-preview_via5ey.png"
      alt="Imagen Izquierda"
      className="imagen11"
    />
    <div className="texto-contenedor">
      <p className="texto43">
        Aviso legal Política de privacidad Política de cookies
      </p>
      <p className="texto44">© 2023 Criptosasun S.L..U. All rights reserved.</p>
    </div>
    <div
      className="simbolo"
      title="Sello PYME INNOVADORA 21/11/2026"
      style={{ width: "238px", textAlign: "center" }}
    >
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <img
            className="final45"
            alt="Sello PYME INNOVADORA 21/11/2026"
            src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704992199/sello_1_sm2aky.jpg"
          />
        </div>
        <div
          style={{
            color: "#000000",
            textDecoration: "none",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <div className="terminar">PYME INNOVADORA</div>
          <div style={{ fontSize: "10px" }}>
            Válido hasta el 21 de noviembre de 2026
          </div>
        </div>
        <div>
          <img
            className="final455"
            alt="Escudo de MEIC 21/11/2026"
            src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1704992417/escudo_1_ez7mxm.jpg"
          />
        </div>
      </a>
    </div>
    <img
      src="https://res.cloudinary.com/dzrp12vse/image/upload/v1725379717/Captura_de_pantalla_2024-09-03_180813_twp8g0.png"
      alt="Imagen Derecha"
      className="imagen11"
    />
    {/* Segunda imagen extra agregada a la derecha */}
    <img
      src="https://res.cloudinary.com/dzrp12vse/image/upload/v1727351158/Logo_PRTR_vertical_COLOR_qiritr.jpg"
      alt="Nueva Imagen Derecha"
      className="imagen11"
    />
  </div>
);
