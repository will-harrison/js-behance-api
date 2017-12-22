import React, { Component } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Loading, Title, Column } from '../styled';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoding: true
    };
  }

  componentDidMount() {
    this.setState(state => {
      return {
        ...state,
        projects: this.props.projects,
        isLoading: false
      };
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState(state => {
      return {
        ...state,
        projects: nextProps.projects,
        isLoading: false
      };
    });
  }


  render() {
    let { isLoading, projects } = this.state;
    return (
      <div>
        {isLoading ? <Loading></Loading> :
          <div>
            <Title>Projects</Title>
            <ProjectList>
              {projects.map(p => (
                <a key={p.id} href={p.url}>
                  <Project>
                    <SColumn>
                      <ProjectName>{p.name}</ProjectName>
                    </SColumn>
                    <img src={p.covers[230]} alt={p.name} />
                    <Stats>
                      <div>{p.stats.views} Views</div>
                      <div>{p.stats.appreciations} Likes</div>
                    </Stats>
                    <div>Published {format(p.published_on * 1000, "MMM YYYY")}</div>
                  </Project>
                </a>
              ))}
            </ProjectList>
          </div>
        }
      </div>
    );
  }
}

const ProjectList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  > a {
    color: #000;
    text-decoration: none;
  }
`;

const Project = styled.div`
  width: calc(90vw / 4);
  margin: 25px 10px;
`;

const SColumn = styled(Column) `
  justify-content: flex-end;
  min-height: 65px;
`;

const ProjectName = styled.div.attrs({ className: "f4" }) ``;

const Stats = styled.div.attrs({ className: "f6" }) `
  display: flex;
  flex-direction: row;

  > div {
    padding-right: 25px;
  }
`;


export default Projects;