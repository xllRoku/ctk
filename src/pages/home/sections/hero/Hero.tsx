import hero_img from "../../../../assets/images/hero-image-2.png";
import Modal from "react-modal";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { ModalIsOpenContextType } from "@/context/navigation/ModalIsOpen/types";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Hero = () => {
  const { isModalOpen, setModalIsOpen } = useModal() as ModalIsOpenContextType;
  let subtitle: any;

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <section className="hero">
      <div className="container-hero">
        <div className="hero-container-image">
          <img src={hero_img} alt="hero image" className="hero-image" />
        </div>

        <section className="control-taken">
          <div className="control-taken-container">
            <div className="control-taken-content">
              <div className="taken-content">
                <div className="taken-title">
                  <h1>Control Taken</h1>
                  <div className="line"></div>
                </div>
                <p className="p-taken">
                  Control Taken Gps le ofrece servicios que además de facilitar
                  la gestion de sus activos, la cual te permitirá tener control
                  y mejorar la seguridad de su vehículo, le permite interactuar
                  con este, por medio de nuestra aplicación móvil.
                </p>
                <div>
                  <button>
                    <Link to="/quote">
                      <p className="btn-request-quote">Solicita Cotizacion</p>
                    </Link>
                  </button>

                  {/* <Modal
                    isOpen={isModalOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <button onClick={closeModal}>close</button>
                    <div className="container-modal">
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
                          <input
                            type="text"
                            name=""
                            placeholder="Cedula o nit"
                          />
                        </div>
                        <div className="container-ciudad">
                          <input type="text" placeholder="ciudad" />
                        </div>
                        <div className="message">
                          <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                          ></textarea>
                        </div>
                        <div>
                          <button>
                            <input type="submit" value="Quiero más detalles" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </Modal> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
