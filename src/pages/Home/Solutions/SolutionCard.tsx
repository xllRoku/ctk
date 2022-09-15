import { SolutionProps } from "./interface/SolutionProps";

const SolutionCard = ({ title, description }: SolutionProps) => {
  return (
    <div className="solution-card">
      <div className="solution-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="container-btn-solution">
          <button>
            <a href="#" className="btn-soltuion">
              Mas información
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
