import { Link } from "react-router-dom";
import { QuoteCardInterFace } from "./interface/QuoteCardInterFace";

const QuoteCard = ({ title, image, path }: QuoteCardInterFace) => {
  return (
    <div className="service">
      <img src={image} alt="moto icon" />
      <div className="service-bottom">
        <h3>{title}</h3>
        <Link to={`/quote/${path}`} className="button-primary">
          Cotizar
        </Link>
      </div>
    </div>
  );
};

export default QuoteCard;
