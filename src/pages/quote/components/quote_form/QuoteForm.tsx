import { Link } from "react-router-dom";
import tractocamion from "../../../../assets/images/quote/tractocamion.svg";
import QuoteCard from "../quote_card/QuoteCard";

const QuoteForm = () => {
  return (
    <div className="container-modal">
      <div className="container-modal-form">
        <div className="container-modal-form-top">
          <Link to="/quote" className="back">
            back
          </Link>
          <h2>COTIZACION</h2>
        </div>
        <div className="content-form">
          <div className="quote-selected">
            <div className="quote-selected-container">
              <img src={tractocamion} alt="tractocamion" />
              <p>Servicio de tractocamion</p>
            </div>
          </div>

          {/* <QuoteCard
            key="Rastreo de motos"
            title="Rastreo de motos"
            image={tractocamion}
            path="motocicly"
          /> */}
          <form className="modal-form">
            <div className="container-name">
              <label>Nombre</label>
              <input type="text" placeholder="Nombre..." />
            </div>
            <div className="container-email">
              <label>Email</label>
              <input type="text" placeholder="Correo electronico..." />
            </div>
            <div className="container-phone">
              <label>Telefono</label>
              <input type="text" placeholder="Teléfono..." />
            </div>
            <div className="container-id">
              <label>Cédula o nit</label>
              <input type="text" name="" placeholder="Cedula o nit..." />
            </div>
            <div className="container-ciudad">
              <label>Ciudad</label>
              <input type="text" placeholder="Ciudad..." />
            </div>
            <div className="message">
              <label>Mensaje</label>
              <textarea name="" id="" cols={30} rows={10}></textarea>
            </div>
            <div className="send">
              <input
                type="submit"
                value="Enviar"
                className="button-secundary"
              />
            </div>
          </form>
        </div>
        <p>
          Al hacer clic en enviar autoriza que sus datos personales han sido y
          están siendo tratados conforme con nuestra política de tratamiento de
          datos personales. Para mayor información podrá consultar nuestra
          política en la página web
        </p>
      </div>
    </div>
  );
};

export default QuoteForm;
