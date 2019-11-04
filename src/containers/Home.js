import React, { Component } from 'react';
import getCharacters from '../services/airbender-api';
import Character from '../components/Character';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'search',
      image: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  componentDidMount() {
    const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters/random';
    getCharacters(URL)
      .then(data => this.setState({ data: data[0].photoUrl }));
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Character photoUrl={data} />
        <button>Fetch Character</button>
        <div>
          <input type="string" name="url" value={this.state.url} onChange={this.handleChange}></input>
          <button>Go!</button>
        </div>
      </>
    );
  }
}
