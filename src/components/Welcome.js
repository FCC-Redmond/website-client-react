import React from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div className="jumbotron-container">
      <Grid>
        <Jumbotron>
          <h1>FREE CODE CAMP REDMOND, WA</h1>
          <p>Hang out with us online and at one of our coffee and code meetups:</p>
          <p>
            <Button bsStyle="success" bsSize="large" href="https://www.facebook.com/groups/free.code.camp.redmond.wa/">
              Join us on Facebook
            </Button>
          </p>
        </Jumbotron>
      </Grid>
    </div>
  );
};

export default Welcome;
