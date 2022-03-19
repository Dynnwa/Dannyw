import React from 'react';
import '../assets/sass/main.scss';
//import { Document } from 'react-pdf'; 
import resume from './resume.pdf';

function Navbar() {

  return (
      <section>
        <header>
            <nav>
                <ul class="nav__links">
                    <li><a href="/#">        Home</a></li>
                    <li><a href="/Experience">Experience</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/Activities">Activities</a></li>
                    <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </nav>
        </header>
    </section>
  )
}
export default Navbar;
