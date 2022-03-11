import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';

const IndexPage = () => (
  <Layout>

    <section id="banner">
      <header>
        <h1>Experience</h1>
      </header>
      <footer>
      <Link>
          <a href="/" className="button style2 scrolly">
            Home
          </a>
        </Link>
        <Link>
          <a href="/Projects" className="button style2 scrolly">
            Projects
          </a>
        </Link>
        <Link>
          <a href="/Activities" className="button style2 scrolly">
            Activities
          </a>
        </Link>
      </footer>
    </section> 

    <article className="container box style3">  
      <a href="https://www.copperleaf.com/" className="image fit" target="_blank">
        <img src={pic1} />
      </a>
      <div className="inner">
        <header>
          <h2>
            Machine Learning and Data Viz CO-OP
            <br/>
            Jan 2022 - Present
          </h2>
        </header>
        <p>
          DESCRIPTION OF WHAT I DID
        </p>
        <p>
          SKILLS
        </p>
      </div>
    </article>

    <article className="container box style3">
      <a className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Math Tutor
            <br />
            Jan 2017 - Present
          </h2>
        </header>
        <p> 
          In grade 11 I was hesitant to take on a role with someone elses learing at stake
          but soon after taking on my first student I fell in love with tutoring. Knowing
          that I'm able to directly impact a students confidence in themselves to learn has been
          the most impactful thing with this job.
        </p>
        <p> 
          Since the first student I have since tutored more than 15 students helping them
          increase their test grades by 8%. 
        </p>
      </div>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
