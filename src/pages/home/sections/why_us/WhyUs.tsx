import { why_us } from "@/data/why_us/why_us";
import Reason from "./components/Reason";

const WhyUs = () => {
  return (
    <section className="reasons">
      <h2>¿Por qué escoger nuestros servicios?</h2>
      <ul className="reasons-container">
        {why_us.map(({ title, description, image }) => (
          <Reason
            key={title}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </ul>
    </section>
  );
};

export default WhyUs;
