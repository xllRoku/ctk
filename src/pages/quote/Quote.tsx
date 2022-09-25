import { quotes } from "@/data/quote/quotes";
import QuoteCard from "./components/quote_card/QuoteCard";

const Quote = () => {
  return (
    <section className="quote">
      <div className="quote-container">
        <h2>Nuestros servicios</h2>
        <ul className="services">
          {quotes.map(({ title, image, path }) => (
            <QuoteCard key={title} title={title} image={image} path={path} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Quote;
