import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import './../App.css';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };
  // general function to handle the form change
  handleChange = (event) => {
    const key = event.target.name;
    //this is to assure the correct assignment of the changed values according to the input name
    this.setState({ [key]: event.target.value });
  };
  handleSubmit = (event) => {
    //this is to prevent page reload
    event.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((response) => {
        this.props.history.push('/beers');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form method="" onSubmit={this.handleSubmit}>
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="tagline">
            Tagline
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="description">
            Description
          </label>
          <br />
          <input
            className="inputDescription"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="first_brewed">
            First Brewed
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="brewers_tips">
            Brewers Tips
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="attenuation_level">
            Attenuation Level
          </label>
          <br />
          <input
            className="input"
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="contributed_by">
            Contributed By
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />
        </div>
        <button className="input" style={{ backgroundColor: '#00BFFF' }}>
          Add New
        </button>
      </form>
    );
  }
}

export default NewBeer;
