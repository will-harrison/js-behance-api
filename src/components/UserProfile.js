import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../api';
import UserHeader from './UserHeader';
import Projects from './Projects';
import Social from './Social';
import WorkExperience from './WorkExperience';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      projects: {},
      followers: {},
      following: {},
      work_experience: {},
      isLoading: true
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    api.users.getAllData(id).then(data => {
      console.log(data)
      data.map(d => {
        if (d.http_code === 200) {
          for (let key in d) {
            if (key !== "http_code") {
              this.setState(state => {
                return {
                  ...state,
                  [key]: d[key],
                  isLoading: false
                };
              });
            }
          }
        }
      });
    })

    api.users.getUser(id).then(user => {

    })
  }

  render() {
    let { user, projects, followers, following, work_experience, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <div>Loading...</div> :
          <Container>
            <UserHeader user={user} />
            <Projects projects={projects} />
            <Social followers={followers} following={following} />
            <WorkExperience experience={work_experience} />
          </Container>
        }
      </div>
    );
  }
}

const Container = styled.div.attrs({ className: "avenir" }) ``;


export default UserProfile;