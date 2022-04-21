import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="About">
      <h5>en savoir plus</h5>
      <h2>A propos de moi</h2>
      <div className="container about_container">

        <div className="right-side">
          <div className="myImg"></div>
        </div>

        <div className="left-side">
          <div className="about-cards">
            <article className="cards">
              <FaAward className="about-icone"/>
              <h4>Experiences</h4>
              <small>Développeur études en cours</small>
            </article>
            <article className="cards">
              <FiUsers  className="about-icone"/>
              <h4>Clients</h4>
              <small>Pétites commerces, <br/> les auto entrepreneurs</small>
            </article>
            <article className="cards">
              <AiOutlineFolderOpen className="about-icone"/>
              <h4>Projets</h4>
              <small>Sur github</small>
            </article>
          </div>

          <p className="description">Titulaire d'un diplôme de biologie en parcours type biochimie à l'université de Lille Sciences Technologies, je suis actuellement en reconversion (prepartion d'un séconde diplôme cette fois ci en informatique) à <a href="https://enigma-school.com/" target="_blank" id="ecole">Enigma School</a> Lille.</p>

          <button className="btn">Click moi</button>
        </div>

      </div>
    </section>
  );
};

export default About;
