import { offers } from "@/data/we_offer/offers";
import Point from "./components/Point";

const WeOffer = () => {
  return (
    <section className="we-offer">
      <div className="why-offer-container">
        <h2>¿Que ofrecemos?</h2>
        <ol className="points-container">
          {offers.map(({ id, description }) => (
            <Point key={id} id={id} description={description} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WeOffer;
