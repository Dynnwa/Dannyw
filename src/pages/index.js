import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
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
      <footer>
        <Link>
          <a href="/Experience" className="button style2 scrolly">
            Experience
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
    <Footer />
  </Layout>
);

export default IndexPage;
