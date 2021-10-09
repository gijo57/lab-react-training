import React from 'react';

class ClickablePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      image: '/img/persons/maxence.png',
    };
  }

  handleClick = () => {
    if (this.state.image === '/img/persons/maxence.png') {
      this.setState({
        image: '/img/persons/maxence-glasses.png',
      });
    } else {
      this.setState({
        image: '/img/persons/maxence.png',
      });
    }
  };

  render() {
    return (
      <img
        style={{ width: '200px' }}
        onClick={this.handleClick}
        src={this.state.image}
        alt="clickable"
      />
    );
  }
}

export default ClickablePicture;
