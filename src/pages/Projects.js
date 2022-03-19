import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'gatsby';
import c from '../assets/images/Canucks.png';
import n from '../assets/images/NBA.png';
import t from '../assets/images/Tranlink.png';
import w from '../assets/images/site.png';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
  <Navbar/>


    <section id="banner">
      <header>
        <h2>Highlighted Projects</h2>
      </header>
    </section>

    <article id="experience"  className="container box style3">  
      <a href="/#" className="image fit">
        <img src={w} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
          <Link to="https://github.com/Dynnwa/Website" target="_blank"> Personal Website </Link>
            <br />
            React.js Javascript Gatsby
          </h2>
        </header>
        <p>
          This was my first taste of react, what better way to introduce myself than to make a personal website!
          Everything you see was created in react (with the help of gatsby ofc). Feel free to click around, many of the additional
          features like the navbar and text boxes were additions I decided to add.
        </p>
      </div>
    </article>

    <article className="container box style3">
      <a href="/#" className="image fit">
        <img src={t} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
          <Link to="https://github.com/Dynnwa/PHP-Oracle_Translink_Model" target="_blank"> Translink database model </Link>
            <br />
            PHP Oacle SQL
          </h2>
        </header>
        <p>
          With the help of two other students, we created a PHP backend that would talk to an Oracle RDMS storing inforamtion about various transit entities
          such as skytrains, stops, stations, buses etc. We created the DDL and HTML frontend to display our project. 
        </p>
      </div>
    </article>

    <article className="container box style3">
      <a href="/#" className="image fit">
        <img src={n} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
           <Link to="https://github.com/Dynnwa/NBA-PlayerStats" target="_blank"> NBA player Scoring dashboard </Link>
            <br />
            Tableau MYSQL
          </h2>
        </header>
        <p>
          This was self directed introduction to SQL. At the time I was curious to do something that would combine my
          intere in NBA and my curiousity to learn SQL. I decided to create a dashboard that would allow me to see 
          which players scored the most of each type of shot, aswell as top scoring teams.
        </p>
      </div>
    </article>

    <article className="container box style3">
      <a href="/#" className="image fit">
        <img src={c} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
          <Link to="https://github.com/Dynnwa/Canucks_2011_finals" target="_blank"> Linear Programming Hockey Lineups </Link>
            <br />
            Linear Programming Python Pulp
          </h2>
        </header>
        <p>
          This was an optional project for my linear programming class
          I decided to do a mini case study on the 2011 Stanley cup finals
          to calculate what the optimal amount of playing time each player
          should have played based on regular season stats.
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
