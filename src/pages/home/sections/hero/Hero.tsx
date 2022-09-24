import hero_img from "../../../../assets/images/hero-image-2.png";
import Modal from "react-modal";
import { useState } from "react";
import { ModalIsOpenContextType } from "@/context/navigation/ModalIsOpen/types";
import { Link } from "react-router-dom";



const Hero = () => {

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
                    <Link to="/quote" className="button-primary">
                      Solicita Cotizacion
                    </Link>
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
