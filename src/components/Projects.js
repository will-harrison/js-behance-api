import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoding: true
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(state => {
      return {
        ...state,
        projects: nextProps.projects,
        isLoading: false
      }
    })
  }


  render() {
    let { isLoading, projects } = this.state;
    return (
      <div>
        {isLoading ? <div>Loading</div> :
          <div>
            {projects.map(p => (
              <div>{p.name}</div>
            ))}
          </div>
        }
      </div>
    );
  }
}

export default Projects;