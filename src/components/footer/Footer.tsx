import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <h2>
          Manzana 2 lote 61 Urbaniacion panamericano Cucuta - Norte de santander
        </h2>
        <p>Copyright 2021 Todos los derechos reservados</p>
        <Link to="/terms-and-conditions">Términos y Condiciones</Link>
      </div>
    </footer>
  );
};

export default Footer;
