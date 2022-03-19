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
        I'm a Third year Computer Science and Statistics student <br/>
        with a curious mind. There's always some kind of thought <br/>
        running through my mind as I think through how things work.<br/>
        Feel free to tak all the time you would like on my website :)<br/>
      </p>
    </section>
    <Footer />
  </Layout>
);

export default IndexPage;
