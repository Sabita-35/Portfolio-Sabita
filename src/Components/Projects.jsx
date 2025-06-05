import React from 'react';
import '../Styles/style.css';
export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="project-list">

        <div className="project-card">
          <h3>Project One</h3>
          <p>A fun weather app built with vanilla JS and OpenWeather API.</p>
          <div className="project-links">
            <a href="" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://sabita-35.github.io/Weather_App/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
         
          <h3>Project Two</h3>
          <p>A simple To-Do app using HTML,CSS,JavaScript and local storage.</p>
          <div className="project-links">
            <a href="https://github.com/Sabita-35/To-Do-App" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://sabita-35.github.io/To-Do-App/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>
     

      

        <div className="project-card">
    
          <h3>Project Three</h3>
          <p>A simple Age Calculator app using  HTML,CSS,JavaScript.</p>
          <div className="project-links">
            <a href="https://github.com/Sabita-35/Age_Calculator" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://sabita-35.github.io/Age_Calculator/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='project-card'>
       <h3>Project four</h3>
          <p>Cureency_Converter App Using HTML,CSS,JavaScript</p>
          <div className="project-links">
            <a href="https://github.com/Sabita-35/Currency_Converter" target="_blank" rel="noreferrer">GitHub</a>
            <a href=" https://sabita-35.github.io/Currency_Converter/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          </div>
<div className="project-card">
    
          <h3>Project five</h3>
          <p>Pet City campaign for <a href='https://www.collegetips.in/'>CollegeTips.in</a></p>
          <div className="project-links">
            <a href="https://github.com/Sabita-35/Pet_City" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://sabita-35.github.io/Pet_City/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>
           </div>
    </section>
  );
}
