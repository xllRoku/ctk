import { solutions } from "@/data/solutions/solutions";
import { useScroll } from "@/hooks/navigation/useScroll";
import { NavigationContextType } from "@/context/navigation/types";
import SolutionCard from "./components/SolutionCard";

const Solutions = () => {
  const { solution } = useScroll() as NavigationContextType;

  return (
    <section className="solution" ref={solution}>
      <div className="solution-container">
        <h2 className="hd-solution">
          Soluciones de Telematica y Geolocalizacion GPS/IoT
        </h2>
        <p className="p-solution">
          Control Taken proporciona efectividad en localización de vehículos
          robados disponible a nivel mundial, gracias a que cuenta con una
          plataforma tecnológica e infraestructura administrada y Gestionada
          propiamente.
        </p>
        <div className="solution-cards">
          <div className="solution-cards-container grilla">
            {solutions.map(({ title, description, image }) => (
              <SolutionCard
                key={title}
                title={title}
                description={description}
                image={image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
