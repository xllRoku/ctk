import { Link } from "react-router-dom";
import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="terms-and-conditions">
      <div className="terms-and-conditions-container">
        <h2>Control Taken Terminos y condiciones Generales</h2>
        <p>
          En esta seccion anexaremos las distintas politicas de privacidad que
          ofrecemos en nuestros servicios como empresa y en nuestras
          aplicaciones por separado cada una.
        </p>
        <div className="links">
          <Link to="/privacy-policy">
            Politica de Privacidad Control Taken Developer
          </Link>
          <Link to="/software-privacy">
            Politica de privacidad de software de rastreo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
