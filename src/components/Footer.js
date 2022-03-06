import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <section id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`} target="_blank">
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="copyright">
        <ul className="menu">
          <li>
            <a>Love Gastby.js</a>
          </li> 
        </ul>
      </div>
    </section>
  );
}
