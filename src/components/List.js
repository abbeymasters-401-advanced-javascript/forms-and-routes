import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getCharacters from '../services/airbender-api';

export default class List extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    const URL = `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${this.props.match.params.id}`;
    getCharacters(URL)
      .then(characters => {
        this.setState({ characters });
      });
  }

  render() {
    const allChars = this.state.characters.map(character => {
      return (
        <>
          <li key={character._id}>
            <img src={character.photoUrl} alt={character.name} />
            <p>{character.name}</p>
          </li>
        </>
      );
    });

    return (
      <>
        <h3>Your Matches:</h3>
        <ul>
          {allChars}
        </ul>
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


