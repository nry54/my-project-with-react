const About = () => {
  return (
    <>
      <section className="section">
        <h2 className="sectionTitle">About Me</h2>
        <p>
          I am an experienced full stack developer with years of expertise in
          Vue.js and PHP. I have developed software for artificial intelligence,
          medicine, Cloud ERP, and educational systems. I am currently deepening
          my knowledge in front-end development and am in the process of
          learning React. I important clean, responsive, and UI/UX design.
        </p>

        <div className="about-details">
          <h3>Professional Skills</h3>
          <ul>
            <li>
              Full Stack Development with{" "}
              <span className="badge text-bg-secondary">Vue.js</span> and{" "}
              <span className="badge text-bg-secondary">PHP</span>
            </li>
            <li>
              Frontend Frameworks:{" "}
              <span className="badge text-bg-secondary">React</span>
              <span className="badge text-bg-secondary"> Vue.js</span>
            </li>
            <li>
              Backend Technologies:{" "}
              <span className="badge text-bg-secondary">PHP</span>{" "}
              <span className="badge text-bg-secondary">C#</span>
            </li>
            <li>
              Database Management:{" "}
              <span className="badge text-bg-secondary">MySQL</span>{" "}
              <span className="badge text-bg-secondary">MongoDB</span>
            </li>
            <li>
              Cloud Technologies:{" "}
              <span className="badge text-bg-secondary">AWS</span>{" "}
              <span className="badge text-bg-secondary">Docker</span>
            </li>
            <li>
              <span className="badge text-bg-secondary">
                UI/UX Design Principles
              </span>
            </li>
          </ul>
        </div>

        <p>Email: nuray.senturk54@gmail.com</p>
      </section>
    </>
  );
};

export default About;
