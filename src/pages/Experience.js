import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';

const IndexPage = () => (
  <Layout>
  <Nav />
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
          Stuff about tutoring
        </p>
      </div>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
