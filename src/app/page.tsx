import Contact from "@/components/Contact/page";
import Hero from "@/components/Hero/page";
import Pircing from "@/components/Pircing/page";
import Services from "@/components/Services/page";
import WorkSystem from "@/components/WorkSystem/page";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="worksystem">
        <WorkSystem />
      </section>
      <section id="pircing">
        <Pircing />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
