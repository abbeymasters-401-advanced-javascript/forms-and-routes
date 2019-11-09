import React, { Component } from 'react';
import getCharacters from '../services/airbender-api';
import Character from '../components/Character';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'search',
      image: ''
    };
  }

  static propTypes ={
    history: PropTypes.object.isRequired
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/list/${this.state.url}`);
  }

  componentDidMount() {
    const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters/random';
    getCharacters(URL)
      .then(data => this.setState({ data: data[0].photoUrl }));
  }

  onRefresh() {
    window.location.reload(false);
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Character photoUrl={data} />
        <button onClick={this.onRefresh}>Fetch Character</button>
        <div>
          <input type="string" name="url" value={this.state.url} onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit}>Go!</button>
        </div>
      </>
    );
  }
}
