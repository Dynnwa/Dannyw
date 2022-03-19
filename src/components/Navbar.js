import React from 'react';
import '../assets/sass/main.scss';
import resume from './resume.pdf';

function Navbar() {

  return (
    <section>
      <header>
          <nav>
              <ul class="nav__links"> <br/>
                  <li><a href="/Dannyw">Home</a></li>
                  <li><a href="/Dannyw/Experience">Experience</a></li>
                  <li><a href="/Dannyw/Projects">Projects</a></li>
                  <li><a href="/Dannyw/Activities">Activities</a></li>
                  <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
              </ul>
          </nav>
      </header>
    </section>
  )
}
export default Navbar;
