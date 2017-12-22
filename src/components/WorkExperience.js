import React from 'react';
import styled from 'styled-components';

const WorkExperience = ({ exp }) => {
  if (!exp) return (<div>Loading Work Experience...</div>)
  if (exp.length === 1) exp = exp[0].work_experience
  return (
    <Container>
      {exp.map((e, i) => (
        <ExpCard key={i}>
          <Position>{e.position}</Position>
          <Organization>{e.organization}</Organization>
          <Location>{e.location}</Location>
        </ExpCard>
      ))}
    </Container>
  );
};

const Container = styled.div`
  flex: 2;
  margin: 100px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ExpCard = styled.div`
  margin: 15px;
`;

const Location = styled.div.attrs({ className: "f7" }) `
  text-align: right;
`;

const Position = styled.div.attrs({ className: "f4" }) `
  text-align: right;
`;

const Organization = styled.div.attrs({ className: "f6" }) `
  text-align: right;
`;

export default WorkExperience;