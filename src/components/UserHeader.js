import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Popover } from 'antd';
import { Column, Row } from '../styled';

const componentName = ({ user, followers, following }) => {
  return (
    <Container>
      <Row>
        <Details>
          <Name>{user.display_name}</Name>
          <div>{user.occupation}</div>
          <div>{user.company}</div>
          <div>{user.location}</div>
        </Details>
        <Logo>
          <img src={user.images[230]} alt={user.display_name} />
        </Logo>
      </Row>
      <Column>
        <SpaceEvenly>
          {user.fields.map((field, index) => (
            <Field key={index}>{field}</Field>
          ))}
        </SpaceEvenly>
        <Column>
          <SpaceEvenly>
            <Member>Member since {format(user.created_on * 1000, "MMM YYYY")}</Member>
          </SpaceEvenly>
          <SpaceEvenly>
            <Popover
              placement={"bottom"}
              trigger={"click"}
              content={followers.slice(0, 10)
                .map(f =>
                  <a href={f.url} key={f.id}>
                    <img src={f.images[50]} alt={f.display_name} />
                    <div>{f.display_name}</div>
                    <hr />
                  </a>)}
              title="Followers" >
              <Followers>{user.stats.followers} Followers</Followers>
            </Popover>
            <Popover
              placement={"bottom"}
              trigger={"click"}
              content={following.slice(0, 10)
                .map(f =>
                  <a href={f.url} key={f.id}>
                    <img src={f.images[50]} alt={f.display_name} />
                    <div>{f.display_name}</div>
                    <hr />
                  </a>)}
              title="Following" >
              <Followers>Following {user.stats.following}</Followers>
            </Popover>
          </SpaceEvenly>
        </Column>
      </Column>
    </Container>
  );
};

const Container = styled(Column) `
  flex: 2;
  padding-left: 50px;
  align-self: center;
`;

const SpaceEvenly = styled(Row) `
  justify-content: space-evenly;
`;

const Details = styled.div`
  text-align: right;
  padding: 5px 10px;
  
`;

const Logo = styled.div`
  align-self: center;
`;

const Name = styled.div.attrs({ className: "f2" }) `
  padding: 0 0 10px 20px;
`;

const Field = styled.div`
  padding: 5px 5px;
`;

const Member = styled.div`
  padding: 5px 0;
`;

const Followers = styled.div`
  padding: 5px 0;
  color: #1890ff;
  text-decoration: underline;
  cursor: pointer;
`;

export default componentName;