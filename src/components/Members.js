import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const Members = () => {
  return (
    <Grid className="grid-container" id="members">
      <Row className="grid-row">
        <Col xs={12}>
          <h1>MEMBERS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sed quam tincidunt, id tincidunt risus ultrices. Morbi vitae auctor nulla, at congue massa. Nam vel nibh
            porttitor, molestie purus dapibus, euismod sapien. Nulla accumsan scelerisque magna. Donec sodales dolor a nisl tempor dignissim. Ut ornare eros nisl, at porta neque aliquam sed.
            Pellentesque ultrices volutpat eros, in luctus diam. Proin vestibulum efficitur accumsan. Sed finibus ultrices consequat. Phasellus eget massa vitae velit iaculis aliquam. Ut ornare dui
            tincidunt, sagittis neque a, consequat purus.
          </p>
          <p>
            Donec faucibus quam id malesuada tristique. In tincidunt vehicula eros quis dignissim. Suspendisse molestie, lacus pharetra vestibulum dapibus, nulla libero bibendum nisl, eu hendrerit sem
            nunc non massa. Donec viverra suscipit imperdiet. Quisque ut arcu nibh. Morbi ut tristique magna. Suspendisse pulvinar eleifend dignissim. Vestibulum cursus sed arcu et vestibulum. Nam
            iaculis, nunc molestie laoreet tincidunt, est nisi placerat tellus, et cursus ipsum erat quis lacus.
          </p>
          <p>
            <Button bsStyle="success" bsSize="large" href="http://react-bootstrap.github.io/components.html" target="_blank">
              Join Us
            </Button>
          </p>
        </Col>
      </Row>
    </Grid>
  );
};

export default Members;
