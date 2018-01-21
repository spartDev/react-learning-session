import React, { Component } from 'react';

import Link from '../../components/Link';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        Show:
        {" "}
        <Link filter="SHOW_ALL">
          All
        </Link>
        {", "}
        <Link filter="SHOW_ACTIVE">
          Active
        </Link>
        {", "}
        <Link filter="SHOW_COMPLETED">
          Completed
        </Link>
      </footer>
    )
  }
}

export default Footer;
