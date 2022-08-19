import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
  <Navbar/>

    <Header />

    <section id="banner">
      <header>
        <h2>Hello!</h2>
      </header>
      <p>
        I'm a Computer Science and Statistics student with a curious<br/>
        mind. There's always some kind of thought running through my head<br/>
        as I think through how things work and solve problems.<br/>
        Feel free to take all the time you would like on my website :)<br/>
      </p>
    </section>
    <Footer />
  </Layout>
);

export default IndexPage;
