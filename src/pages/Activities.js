import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>

    <section id="banner">
      <header>
        <h1>Activities</h1>
      </header>
      <footer>
      <Link>
          <a href="/Experience" className="button style2 scrolly">
            Experiences
          </a>
        </Link>
        <Link>
          <a href="/Projects" className="button style2 scrolly">
            Projects
          </a>
        </Link>
        <Link>
          <a href="/" className="button style2 scrolly">
            Home
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
            Powerlifting
            <br />
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
            Photography
            <br />
            Jan 2017 - Present
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
            Math
            <br />
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
            League of legends
            <br />
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
