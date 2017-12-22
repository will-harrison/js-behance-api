import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../api';
import UserHeader from './UserHeader';
import Projects from './Projects';
import WorkExperience from './WorkExperience';
import { Loading, Row } from '../styled';
import tooManyRequests from '../util/tooManyRequests.json';


class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      projects: [],
      followers: [],
      following: [],
      work_experience: [],
      isLoading: true,
      testing: false
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    if (this.state.testing) {
      console.log("testing with tooManyRequests")
      let { user, projects, following, followers, work_experience } = tooManyRequests;
      this.setState(state => {
        return {
          ...state,
          user,
          projects,
          followers,
          following,
          work_experience,
          isLoading: false
        }
      })
    } else {
      console.log("pulling data")
      api.users.getAllData(id).then(data => {
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
    }
  }

  render() {
    let { user, projects, followers, following, work_experience, isLoading } = this.state;
    if (isLoading) return <Loading></Loading>
    return (
      <div>
        <Container>
          <Row>
            <UserHeader user={user} followers={followers} following={following} />
            <WorkExperience exp={work_experience} />
          </Row>
          <Projects projects={projects} />
        </Container>
        }
      </div>
    );
  }
}

const Container = styled.div.attrs({ className: "avenir" }) ``;


export default UserProfile;