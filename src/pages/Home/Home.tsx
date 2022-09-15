import { Layout } from "@/layouts";
import { Hero } from "./Hero";
import { Solutions } from "./Solutions";
import { WeOffer } from "./We-offer";
import { WhyUs } from "./Why-us";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <WeOffer />
        <WhyUs />
        <Solutions />
      </Layout>
    </>
  );
};

export default Home;
