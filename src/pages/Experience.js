import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';

const IndexPage = () => (
  <Layout>
  <Navbar/>

    <section id="banner">
      <header>
        <h2>Experience</h2>
      </header>
    </section> 

    <article className="container box style3">  
      <a href="https://www.copperleaf.com/" className="image fit" target="_blank">
        <img src={pic1} />
      </a>
      <div className="inner">
        <header>
          <h2>
            Software Developer CO-OP
            <br/>
            Jan 2022 - Aug 2022
          </h2>
        </header>
        <p>
          - Improved Angular Frontend usablitlity by creating new widgets which users can
            interact with for a better user experience <br/>
          - Added configurable fields to Esri GIS feature by refactoring the code and updating
            related unit tests to improve overall user experience for specific needs <br/>
          - Implemented machine learning features into Copperleaf software by adding various 
            classes to extract user data,  helping deliver software that is updated with machine
            learning capabilities  to clients <br/>
          - Created and productized a set of Power BI dashboards that use minimal import data 
            from Oracle by designing their layouts to allow users to compare up to four 
            investment scenarios together <br/>
        </p>
        <p>
          SKILLS <br/>
          - Angular <br/>
          - C# <br/>
          - Typescript
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
          In grade 11 I was hesitant to take on a role with someone elses learning at stake
          but soon after taking on my first student I fell in love with tutoring. Knowing
          that I'm able to directly impact a students confidence in themselves to learn has been
          the most impactful thing with this job.
        </p>
        <p> 
          Since the first student I have since tutored more than 15 students helping them
          increase their test grades by atleast a letter grade.
        </p>
      </div>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
