import { Link } from "react-router-dom";

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
        <form className="modal-form">
          <div className="container-name">
            <input type="text" placeholder="Nombre" />
          </div>
          <div className="container-email">
            <input type="text" placeholder="Correo electronico" />
          </div>
          <div className="container-phone">
            <input type="text" placeholder="Teléfono" />
          </div>
          <div className="container-id">
            <input type="text" name="" placeholder="Cedula o nit" />
          </div>
          <div className="container-ciudad">
            <input type="text" placeholder="ciudad" />
          </div>
          <div className="message">
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </div>
          <div>
            <button className="btn-quote">
              <input type="submit" value="Quiero más detalles" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
