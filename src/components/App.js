import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../api';
import Search from './Search';
import Users from './Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    api.users.getUsers().then(data => {
      this.setState(state => {
        return {
          ...state,
          users: data.users
        }
      })
    })
  }

  render() {
    let { users } = this.state;
    let suggestedUser = users.length ? users[0].username : ''
    return (
      <Container>
        <Search suggested={suggestedUser} />
        <Users users={users} />
      </Container>
    );
  }
}

const Container = styled.div.attrs({ className: "avenir" }) `
  min-height: 100vh;
  border-top: 5px solid #336699;
  border-bottom: 3px solid #336699;
`;

export default App;
