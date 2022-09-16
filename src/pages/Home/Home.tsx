import { Layout } from "@/layouts";
import { Hero } from "./Hero";
import { Solutions } from "./Solutions";
import { WeOffer } from "./We-offer";
import { WebSites } from "./Web-site";
import { WhyUs } from "./Why-us";

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
