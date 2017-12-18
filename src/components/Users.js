import React from 'react';
import styled from 'styled-components';
import User from './UserCard';

const Users = ({ users }) => {
  return (
    <div  >
      <Title>Browse Behance Users</Title>
      <UsersContainer>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </UsersContainer>
    </div>
  );
};

const UsersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Title = styled.div.attrs({ className: "f2" }) `
  text-align: center;
  align-self: center;
  padding: 25px 0;
`;

export default Users;