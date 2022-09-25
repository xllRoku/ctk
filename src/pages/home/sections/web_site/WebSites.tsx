import { web_sites } from "@/data/web_site/web_sites";
import { useScroll } from "@/hooks/navigation/useScroll";
import { NavigationContextType } from "@/context/navigation/types";
import WebSiteCard from "./components/WebSiteCard";

const WebSites = () => {
  const { webs } = useScroll() as NavigationContextType;

  return (
    <section className="web-sites" ref={webs}>
      <div className="web-sites-container">
        <h2>Plataforma Web</h2>
        <div className="web-sites-cards">
          <div className="web-sites-card-container grilla">
            {web_sites.map(({ title, image, points, description }) => (
              <WebSiteCard
                key={title}
                title={title}
                image={image}
                points={points}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebSites;
