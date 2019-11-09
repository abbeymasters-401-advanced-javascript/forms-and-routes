import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getCharacters from '../services/airbender-api';

export default class Detail extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    const URL = `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${this.props.match.params.id}`;
    getCharacters(URL)
      .then(characters => {
        this.setState({ characters: characters[0] });
      });
  }

  render() {
    return (
      <>
        <h1>{this.state.characters.name}</h1>
        <img src={this.state.characters.photoUrl} alt={this.state.characters.name} />
        <p>{this.state.characters.affiliation}</p>
      </>
    );

  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };
}

