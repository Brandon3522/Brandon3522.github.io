import './index.scss'
import ProjectData from '../../data/projects.json'

const Projects = () => {
  const renderProjects = (projects) => {
    return (
      <div className="images-container">
        {projects.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                alt="projects"
                className="projects-image"
              ></img>
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <h4 className='tools'>{port.tools}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
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
