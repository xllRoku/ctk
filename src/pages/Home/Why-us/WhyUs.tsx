import { why_us } from "@/data/why_us/why_us";
import Reason from "./Reason";

const WhyUs = () => {
  return (
    <section className="reasons">
      <h2>¿Por qué escoger nuestros servicios?</h2>
      <div className="reasons-container">
        {why_us.map(({ title, description, image }) => (
          <Reason
            key={title}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
