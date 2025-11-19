import "../hooks/custom.js";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Welcome to my portfolio</h1>
        <h2 className="home-subtitle">Nuray Şentürk</h2>
        <p className="home-description">
          I'm a{" "}
          <span
            className="typed"
            data-type-items="Computer Engineer, Web Developer, Full Stack Developer"
          ></span>
        </p>
      </div>
    </>
  );
};

export default Home;
