const HomePage = () => {
  return(
    <div id="home">
      <section className="intro-image">
        <div className="intro">
          <div className="intro-name">
            <p>Hello, I'm May</p>
          </div>
          <div className="intro-description">
            <div className="static-txt">I'm a</div>
            <div className="dynamic-txt">Web Developer</div> 
          </div>
        </div>
        <div className="image">
          <img src={process.env.PUBLIC_URL + '/assets/profile.jpg'} alt="profile"/>
        </div>
      </section>

      <div className="wave" id="wave1" style={{"--i":1}}></div>
      <div className="wave" id="wave2" style={{"--i":2}}></div>
      <div className="wave" id="wave3" style={{"--i":3}}></div>
      <div className="wave" id="wave4" style={{"--i":4}}></div>
    </div>


  );
}

export default HomePage;