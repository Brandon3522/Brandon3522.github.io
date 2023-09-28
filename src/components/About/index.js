import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About me</h1>
        <p className="p1">
          Hello, my name is Brandon, and I'm a software developer with a passion
          for programming. My journey in software development started in 2017
          when I built my first computer, and since then, I have been captivated
          by the endless possibilities that programming offers.
        </p>
        <p className="p2">
          I recently graduated from Austin Peay State University with a
          bachelor's degree in computer science, specializing in software
          engineering, and minoring in mathematics. Through my studies, I gained
          extensive knowledge of programming fundamentals and developed a strong
          foundation in software engineering principles.
        </p>
        <p className="p3">
          In addition to my academic achievements, I have experience working on
          a variety of programming projects, including developing desktop
          applications and web-based systems. I am proficient in C#, Python, and
          JavaScript. I also have experience working with React.js and .NET Core. When I'm not
          programming, I enjoy playing guitar and listening to music.
        </p>
        <p className="p4">Languages:</p>

        <ul className="ul-list">
          <li> C# </li>
          <li> Java </li>
          <li> Python </li>
          <li> HTML / CSS </li>
          <li> JavaScript </li>
          <li> TypeScript </li>
		  <li> SQL </li>
		  <li> NoSQL </li>
        </ul>

		<p className="p5">Frameworks:</p>

        <ul className="ul-list">
          <li> React.js </li>
		  <li> Firebase </li>
		  <li> .NET Core </li>
		  <li> Windows Presentation Foundation (WPF) </li>
		  <li> JUnit </li>
          <li> Node.js </li>
        </ul>
      </div>
    </div>
  )
}

export default About
