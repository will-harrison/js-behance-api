import React from 'react';
import styled from 'styled-components';

const componentName = ({ user }) => {
  return (
    <div>
      <Name>{user.display_name}</Name>
      <div>{user.occupation}</div>
      <div>{user.company}</div>
      <div>{user.location}</div>
      <img src={user.images[230]} alt={user.display_name} />
      {user.fields.map((field, index) => (
        <Field key={index}>{field}</Field>
      ))}
      <div>{user.stats.followers}</div>

    </div>
  );
};

const Name = styled.div``;
const Field = styled.span`
  padding: 10px 15px;
`;

export default componentName;