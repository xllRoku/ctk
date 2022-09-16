import { ReasonProps } from "../interface/ReasonProps";

const Reason = ({ title, description, image }: ReasonProps) => {
  return (
    <div className="reason">
      <div className="reason-container">
        <div className="reason-container-image">
          <img src={image} alt="icon" className="integrated-image" />
        </div>
        <div className="reason-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Reason;
