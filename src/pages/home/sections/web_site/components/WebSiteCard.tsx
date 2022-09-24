import check from "../../../../../assets/images/check.png";
import { CardWebSiteProps } from "../interface/CardWebSiteProps";

const WebSiteCard = ({
  title,
  image,
  points,
  description,
}: CardWebSiteProps) => {
  return (
    <div className="web-site">
      <div className="web-site-title">
        <h3>{title}</h3>
      </div>
      <div className="web-site-image-container">
        <img src={image} alt="" />
      </div>
      <div className="web-site-points">
        {points.map(({ point }) => (
          <div className="points">
            <img src={check} alt="" className="check" />
            <p className="p-point">{point}</p>
          </div>
        ))}
      </div>
      <div className="web-site-description">
        <p>{description}</p>
      </div>
      <div className="web-site-link-container">
        <a href="#" className="button-secundary">
          Más Información
        </a>
      </div>
    </div>
  );
};

export default WebSiteCard;
