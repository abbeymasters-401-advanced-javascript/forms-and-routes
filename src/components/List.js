import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getCharacters from '../services/airbender-api';

export default class List extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    const URL = `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${this.props.match.params.search}`;
    getCharacters(URL)
      .then(data => this.setState({ data: data[0].photoUrl }));
  }

  render() {
    const allChars = this.state.characters.map(character => {
      return (
        <p key={character.photoUrl}>hello</p>
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
}

List.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      search: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

