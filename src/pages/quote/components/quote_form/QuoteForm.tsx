import { SelectedServiceContextType } from "@/context/selected_service/types";
import { useSelectedService } from "@/hooks/selected_service/useSelectedService";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const QuoteForm = () => {
  const { selectedService } =
    useSelectedService() as SelectedServiceContextType;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { title, image } = selectedService;

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
              <img src={image} alt="tractocamion" />
              <p>{title}</p>
            </div>
          </div>
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
