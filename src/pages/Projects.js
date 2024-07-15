const ProjectsPage = () => {
  return(
    <div id="projects">
      <h1>Projects</h1>
      <div className="project-container">
        <img src={process.env.PUBLIC_URL + '/assets/BT.png'} alt="Budget Tracker Screenshot"/>
        <div className="project-description">
          <h3>Budget Tracker</h3>
          <p>Full stack web application built with Java, SpringBoot, MySQL</p>
        </div>
      </div>
      <div className="project-container">
        <img src={process.env.PUBLIC_URL + '/assets/BT.png'} alt="Budget Tracker Screenshot"/>
        <div className="project-description">
          <h3>Budget Tracker</h3>
          <p>Full stack web application built with Java, SpringBoot, MySQL</p>
        </div>
      </div>
      <div className="project-container">
        <img src={process.env.PUBLIC_URL + '/assets/BT.png'} alt="Budget Tracker Screenshot"/>
        <div className="project-description">
          <h3>Budget Tracker</h3>
          <p>Full stack web application built with Java, SpringBoot, MySQL</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;