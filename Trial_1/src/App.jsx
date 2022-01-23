import React, { Component } from 'react';
import TextComponent from './TextComponent.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textData: [],
    };
  }

  componentDidMount() {
    setState({
      textData: [
        'Integer in purus dictum, aliquet purus at, blandit augue.',
        'Nulla ac velit quis metus sollicitudin vehicula non nec elit.',
        'Morbi vitae ligula ac odio auctor porta.',
        'Fusce id enim imperdiet, finibus ex at, rutrum mi.',
        'Cras non sem sodales, ullamcorper ipsum non, egestas arcu.',
      ],
    });
  }

  alertWindow(text) {
    alert(text);
  }

  render() {
    return (
      <div className='textCompContainer'>
        <h1 className='textCompHeaderText'>This app will alert some text</h1>
        <TextComponent
          someText={this.state.textData}
          alertWindow={this.alertWindow("This shouldn't show on page load!")}
        />
      </div>
    );
  }
}

export default App;
