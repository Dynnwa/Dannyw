import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import power from '../assets/images/BB.png';
import cam from '../assets/images/cam.png';
import math from '../assets/images/math.png';
import lol from '../assets/images/League.png';
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
        <img src={power} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Powerlifting
          </h2>
        </header>
        <p>
          I started working out september 2019 and ever since then
          its become a a huge passion of mine. A day without working
          out is really a day wasted at this point! Currently I'm preparing
          for my first competition, hoping to set a provincial bench press
          record in the years to come!
        </p>
      </div>
    </article>

    <article className="container box style3">
      <a href="/#" className="image fit">
        <img src={cam} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Photography
          </h2>
        </header>
        <p>
          Photography was something that I used to be very into in Highschool
          but it got away from me as school started to pick up. Recently I've
          gotten back into the hobby and I'm having a blast taking pictures
          of my friends and editing my photos <br/>
        </p>
      </div>
    </article>

    <article className="container box style3">
      <a href="/#" className="image fit">
        <img src={math} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Math
          </h2>
        </header>
        <p>
          Hard to really meet someone that genuinly enjoys math and the process
          of not understanding the concepts. I've always been very mathematically
          inclined, entering math competitions in highschool. After entering upper year
          and taking more interesting classes, my passion has only grown larger
        </p>
      </div>
    </article>

    <article className="container box style3">
      <a href="/#" className="image fit">
        <img src={lol} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            League of legends
          </h2>
        </header>
        <p>
          I'm sure you expected to see some sort of game here and you're suspicion
          is correct! I play league all the time and sometimes I can get pretty into it.
          It's always been a great way for me to spend time with my friends and just have a good time
        </p>
      </div>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
