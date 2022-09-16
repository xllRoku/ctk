import Hero from "./sections/hero/Hero";
import Solutions from "./sections/solutions/Solutions";
import WebSites from "./sections/web_site/WebSites";
import WeOffer from "./sections/we_offer/WeOffer";
import WhyUs from "./sections/why_us/WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <WeOffer />
      <WhyUs />
      <Solutions />
      <WebSites />
    </>
  );
};

export default Home;
