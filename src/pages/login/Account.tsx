import { useLocation } from "react-router-dom";
import { LocationProps } from "@/interface/LocationProps";
import { Link } from "react-router-dom";
import Form from "./components/Form";
import OthersSingIn from "./components/others_sign_in/OthersSingIn";
import { useScroll } from "@/hooks/navigation/useScroll";
import { NavigationContextType } from "@/context/navigation/types";
import { useEffect } from "react";

const Account = ({ location, setLocation }: LocationProps) => {
  const { setCurrentLocation } = useScroll() as NavigationContextType;
  const curntLocation = useLocation();

  useEffect(() => {
    setCurrentLocation(curntLocation.pathname);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="login">
      <div className="container-login">
        <div className="content-login">
          <OthersSingIn location={location} />
          <Form location={location} />
        </div>
        <div className="panel">
          <div className="container-panel">
            {location === "sign-in" || location === "" ? (
              <p>
                Ingresa tus datos personales para empezar a monitorear tu carro
              </p>
            ) : (
              <p>
                Para mantener contacto con nosotros por favor ingresa con tú
                información personal
              </p>
            )}

            {location === "sign-in" || location === "" ? (
              <Link
                to="/account/sign-up"
                onClick={() => {
                  setLocation("sign-up");
                }}
              >
                <p>Resgistrate</p>
              </Link>
            ) : (
              <Link
                to="/account/sign-in"
                onClick={() => {
                  setLocation("sign-in");
                }}
              >
                <p>Iniciar Sesion</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
