import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const renderMembers = () => {
  let arr = [];
  for (let i = 1; i < 8; i++) {
    arr.push(
      <Col sm={4} xs={12} className="member">
        <div className="member-container">
          <div className="picture" />
          <div className="information">
            <div className="name">John Smith</div>
            <div className="skills">HTML, CSS, Javascript</div>
            <div className="links" />
          </div>
        </div>
      </Col>
    );
  }
  return arr;
};

const Members = () => {
  return (
    <Grid className="grid-container" id="members">
      <h1>MEMBERS</h1>
      <Row className="grid-row">{renderMembers()}</Row>
    </Grid>
  );
};

export default Members;
