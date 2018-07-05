import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const renderProjects = () => {
  let arr = [];
  for (let i = 1; i <= 2; i++) {
    arr.push(
      <Col sm={4} xs={12} className="project">
        <div className="project-container">
          <div className="picture" />
          <div className="information">
            <div className="name">Website</div>
            <div className="skills">HTML, CSS, Javascript</div>
            <div className="links" />
          </div>
        </div>
      </Col>
    );
  }
  return arr;
};

const Projects = () => {
  return (
    <div id="projects">
      <Grid className="grid-container">
        <h1>Projects</h1>
        <Row className="grid-row">
          <Col xs={12}>{renderProjects()}</Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Projects;
