import { CardSolutionProps } from "../interface/CardSolutionProps";

const SolutionCard = ({ title, description, image }: CardSolutionProps) => {
  return (
    <div className="solution-card">
      <div className="solution-card-image-container">
        <img src={image} alt="image card" />
      </div>
      <div className="solution-card-content">
        <h3>{title}</h3>
        <p className="p-card-solution">{description}</p>
        <div className="container-btn-solution">
          <a href="#" className="button-secundary">
            Mas información
          </a>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
