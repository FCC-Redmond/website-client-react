import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Members extends React.Component {
  constructor() {
    super();

    this.state = {
      members: []
    }

    this.renderMembers = this.renderMembers.bind(this);
  }

  componentDidMount() {
    fetch('https://fccredmond.herokuapp.com/api/v0/members')
    .then(res => res.json())
    .then(body => {
      this.setState({members: body.data});
    })
  }

  renderMembers() {
    let memberJsx = this.state.members.map(member => {
      return <Col sm={4} xs={12} className="member" key={member._id}>
        <div className="member-container">
          <div className="picture" />
            <div className="information">
            <div className="name">{member.firstName} {member.lastName}</div>
            <div className="skills">{member.skills}</div>
            <div className="links" />
          </div>
        </div>
      </Col>
    })
    return memberJsx;
  }

  render() {
    return <Grid className="grid-container" id="members">
      <h1>MEMBERS</h1>
      <Row className="grid-row">{this.renderMembers()}</Row>
    </Grid>
  }
}

export default Members;
