import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import api from '../api';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "denislomov",
      error: false
    };
  }

  onInputChange = (e) => {
    e.persist();
    this.setState(state => {
      return {
        ...state,
        [e.target.name]: e.target.value
      }
    })
  }

  onForSubmit = (e) => {
    e.preventDefault();

    api.users.getUser(this.state.userName).then(data => {
      console.log(data)
      if (data.http_code === 200) {
        this.props.history.push(`/user/${this.state.userName}`)
      } else {
        this.setState(state => {
          return {
            ...state,
            error: true
          }
        })
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.onForSubmit}>
        <FormContainer>
          <div>
            <Input
              type="text"
              name={"userName"}
              value={this.state.userName}
              onChange={this.onInputChange}
              placeholder={"denislomov"}
              autoFocus />
          </div>
          <div>
            <Input type="submit" />
          </div>
        </FormContainer>
        {this.state.error && <Err>This user was not found.</Err>}
      </form>
    );
  }
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 25px 20px;
`;

const Input = styled.input.attrs({ className: "input-reset ba b--black-20 pa2 mb2 db w-100" }) `
  margin: 0 5px;
`

const Err = styled.div.attrs({ className: "f6" }) `
  color: tomato;
  text-align: center;
`;

export default withRouter(Search);