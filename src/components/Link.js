import smoothscroll from 'smoothscroll-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const Element = props => {
  return props.children;
};

class Link extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    element: PropTypes.string,
    offset: PropTypes.number,
    timeout: PropTypes.number,
    children: PropTypes.node.isRequired,
  };
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    smoothscroll.polyfill();
  }
  handleClick(e) {
    e.preventDefault();
  }
  render() {
    return (
      <Element>
        {typeof this.props.children === 'object' ? (
          React.cloneElement(this.props.children, { onClick: this.handleClick })
        ) : (
          <span onClick={this.handleClick}>{this.props.children}</span>
        )}
      </Element>
    );
  }
}

export default Link;
