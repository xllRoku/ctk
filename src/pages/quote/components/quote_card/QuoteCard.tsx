import { SelectedServiceContextType } from "@/context/selected_service/types";
import { useSelectedService } from "@/hooks/selected_service/useSelectedService";
import { Link } from "react-router-dom";
import { QuoteCardInterFace } from "./interface/QuoteCardInterFace";

const QuoteCard = ({ title, image, path }: QuoteCardInterFace) => {
  const { setSelectedService } =
    useSelectedService() as SelectedServiceContextType;

  return (
    <li
      className="service"
      onClick={() => setSelectedService({ title, image })}
    >
      <div className="service-bottom">
        <img src={image} alt="moto icon" />
        <h3>{title}</h3>
        <div>
          <Link to={`/quote/${path}`} className="button-primary">
            Cotizar
          </Link>
        </div>
      </div>
    </li>
  );
};

export default QuoteCard;
