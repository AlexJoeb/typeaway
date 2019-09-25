import React, { Component } from 'react';

import Header from './Components/Header';
import Body from './Components/Body';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dark: true,
    }
  }

  toggleDark = () => {
    this.setState((prevState) => {
      return {
        dark: !prevState.dark,
      }
    });
  }

  render = () => {
    const { dark } = this.state;
    return (
      <div className="App">
        <Header dark={dark} toggleDark={this.toggleDark} />
        <Body dark={dark} />
      </div>
    );
  }
}