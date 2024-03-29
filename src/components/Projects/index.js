import './index.scss'
import ProjectData from '../../data/projects.json'

const Projects = () => {
  const renderProjects = (projects) => {
    return (
      <div className="project-container">
        {projects.map((project, idx) => {
          return (
            <div className="project-card" key={idx}>
              <img
                src={project.cover}
                alt="projects"
                className="projects-image"
              ></img>
              <div className="content">
                <p className="title">{project.title}</p>
                <h4 className="description">{project.description}</h4>
                <h4 className="tools">{project.tools}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(project.url)}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container projects-page">
      <h1 className="title">Projects</h1>
      <div>{renderProjects(ProjectData.projects)}</div>
    </div>
  )
}

export default Projects
