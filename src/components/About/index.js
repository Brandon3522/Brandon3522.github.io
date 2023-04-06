import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About me</h1>
        <p className='p1'>
          Hello. My name is Brandon, and my interest in software development
          began in 2017 when I started building computers. I am passionate about
          programming and constantly working on learning new concepts.
        </p>
        <p className='p2'>
          I have a bachelor's degree in computer science with a concentration in
          software engineering and a minor in mathematics from Austin Peay State
          University.
        </p>
        <p className='p3'>
          I have extensive knowledge of programming fundamentals and a solid
          foundation in software engineering principles.
        </p>
        <p className='p4'>Languages / Technologies used:</p>

        <ul className='ul-list'>
          <li> C# </li>
          <li> Java </li>
          <li> Python </li>
          <li> HTML / CSS </li>
          <li> JavaScript </li>
          <li> TypeScript </li>
          <li> React.js </li>
          <li> Firebase </li>
        </ul>
      </div>
    </div>
  )
}

export default About
