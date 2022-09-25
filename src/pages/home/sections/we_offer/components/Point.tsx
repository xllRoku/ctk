import { PointProps } from "../interface/PointProps";

const Point = ({ id, description }: PointProps) => {
  return (
    <li className="point-container">
      <div className="point">
        <span className="point-number">{id}</span>
      </div>
      <p className="p-us">{description}</p>
    </li>
  );
};

export default Point;
