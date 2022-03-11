import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>


    <section id="banner">
      <header>
        <h1>Highlighted Projects</h1>
      </header>
      <footer>
      <Link>
          <a href="/Experience" className="button style2 scrolly">
            Experiences
          </a>
        </Link>
        <Link>
          <a href="/" className="button style2 scrolly">
            Home
          </a>
        </Link>
        <Link>
          <a href="/Activities" className="button style2 scrolly">
            Activities
          </a>
        </Link>
      </footer>
    </section>

    <article id="experience"  className="container box style3">  
      <a href="/#" className="image fit">
        <img src={pic1} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Personal Website
            <br />
            React.js Javascript Gatsby
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
      <a href="/#" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Translink database model
            <br />
            PHP Oacle SQL
          </h2>
        </header>
        <p>
          Stuff about tutoring
        </p>
      </div>
    </article>

    <article className="container box style3">
      <a href="/#" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            NBA player Scoring dashboard
            <br />
            Tableau MYSQL
          </h2>
        </header>
        <p>
          Stuff about tutoring
        </p>
      </div>
    </article>

    <article className="container box style3">
      <a href="/#" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Linear Programming Hockey Lineups
            <br />
            Linear Programming Python Pulp
          </h2>
        </header>
        <p>
          Stuff about tutoring
        </p>
      </div>
    </article>

    <article className="container box style3">
      <header>
        <h2>Check out more of my projects 
          <Link to="https://github.com/Dynnwa" target="_blank"> here </Link>
        </h2>

      </header>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
