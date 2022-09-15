import { Layout } from "@/layouts";
import { Hero } from "./Hero";
import { Solutions } from "./Solutions";
import { WeOffer } from "./We-offer";
import { WebSites } from "./Web-site";
import { WhyUs } from "./Why-us";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <WeOffer />
        <WhyUs />
        <Solutions />
        <WebSites />
      </Layout>
    </>
  );
};

export default Home;
