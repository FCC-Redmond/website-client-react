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
            <NavItem eventKey={1} href="#join">
              Join Us
            </NavItem>
            <NavItem eventKey={2} href="#members">
              Members
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Grid>
    </Navbar>
  );
};

export default Navigation;
