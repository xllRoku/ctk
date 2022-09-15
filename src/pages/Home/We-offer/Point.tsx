import { PointProps } from "./interface/PointProps";

const Point = ({ id, description }: PointProps) => {
  return (
    <div className="point-container">
      <div className="point">
        <span className="point-number">{id}</span>
      </div>
      <p className="p-us">{description}</p>
    </div>
  );
};

export default Point;
