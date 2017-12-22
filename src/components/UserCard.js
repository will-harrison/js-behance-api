import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

class UserCard extends Component {
  render() {
    let { user } = this.props;
    return (
      <UserContainer onClick={() => this.props.history.push(`/users/${user.username}`)}>
        <Img src={user.images["100"]} alt={user.display_name} />
        <UserDetail>
          <Name>{user.display_name}</Name>
          <div>{user.occupation}</div>
          <div>{user.city}, {user.country}</div>
          <a href={user.website}>{user.website}</a>
        </UserDetail>
      </UserContainer>
    );
  }
};

// slight blur on text during transition...
const UserContainer = styled.div`
  display: flex;
  padding: 20px;
  width: calc(90vw / 3);
  padding: 25px 0;
  transition: transform .3s;
  overflow: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  
  &:hover {
    transform: scale(1.048);
    cursor: pointer;
  }
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  > a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Img = styled.img`
  padding-right: 10px;
  align-self: center;
`;

const Name = styled.div.attrs({ className: "f3" }) ``;
const Country = styled.div``;

export default withRouter(UserCard);