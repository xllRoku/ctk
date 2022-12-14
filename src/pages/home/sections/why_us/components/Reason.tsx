import { ReasonProps } from "../interface/ReasonProps";

const Reason = ({ title, description, image }: ReasonProps) => {
  return (
    <li className="reason">
      <div className="reason-container">
        <div className="reason-container-image">
          <img src={image} alt="icon" className="integrated-image" />
        </div>
        <div className="reason-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default Reason;
