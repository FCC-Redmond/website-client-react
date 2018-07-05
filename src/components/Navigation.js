import React from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import glyph from '../glyph.jpg';

const Navigation = () => {
  return (
    <Navbar fixedTop style={{ backgroundColor: 'darkgreen', backgroundImage: 'none' }}>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">
              <img src={glyph} className="logo" alt="Free Code Camp" />
              <span className="title">FCC Redmond</span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://www.facebook.com/groups/free.code.camp.redmond.wa/">
              Facebook
            </NavItem>
            <NavItem eventKey={1} href="https://github.com/FCC-Redmond/website-client-react/blob/aa-1/README.md">
              Github
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Grid>
    </Navbar>
  );
};

export default Navigation;
