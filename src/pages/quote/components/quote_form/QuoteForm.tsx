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
        <Link to="/quote" className="back">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA8UlEQVRoge3YoUoFQRQG4PEKgibBZBKMNoPVfF/L5gsYfACL2SyoCCo+ge2CySIGg+kz3JlwbbMKB4fztWn/v+zOnplSUkoppZRSSj9gB/e4ic4yGbbxbOkxOs8k2MJtLfGC3ehM3bCJ61pigb3oTN2wgata4hX70Zm6YR2XtcQbDqIzdcMMF7XEOw6jM3XDGs5riQ8cRWfqVkuc1RKfOI7ONAlOa4kvzKPzTIIT/9ddKaXMoh/iH7C6GuHVKmWgj72UQbbfxgg/xMYII0pjhKGxMcIY3xjhYNVYPeo+Ref5FcvLh4c2EqSUUkoppZSifAO0GQdC09EniQAAAABJRU5ErkJggg==" />
        </Link>
        <div className="container-modal-form-top">
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
