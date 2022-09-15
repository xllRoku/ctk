import SolutionCard from "./SolutionCard";
import { solutions } from "@/data/solutions/solutions";

const Solutions = () => {
  return (
    <section className="solution">
      <div className="solution-container">
        <h2>Soluciones de Telematica y Geolocalizacion GPS/IoT</h2>
        <p className="p-solution">
          Control Taken proporciona efectividad en localización de vehículos
          robados disponible a nivel mundial, gracias a que cuenta con una
          plataforma tecnológica e infraestructura administrada y Gestionada
          propiamente.
        </p>
        <div className="solution-cards">
          <div className="solution-cards-container">
            {solutions.map(({ title, description }) => (
              <SolutionCard
                key={title}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
