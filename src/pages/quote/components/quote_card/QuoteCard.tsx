import { Link } from "react-router-dom";
import { QuoteCardInterFace } from "./interface/QuoteCardInterFace";

const QuoteCard = ({ title, image, path }: QuoteCardInterFace) => {
  return (
    <div className="service">
      <img src={image} alt="moto icon" />
      <h3>{title}</h3>
      <Link to={`/quote/${path}`} className="btn-quote">
        <p>Cotizar</p>
      </Link>
    </div>
  );
};

export default QuoteCard;
