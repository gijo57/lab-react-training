import React from 'react';

class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      imageIndex: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
    };
  }

  handleClick = () => {
    this.setState({ imageIndex: '-empty' });
    setTimeout(() => {
      this.setState({
        imageIndex: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
      });
    }, 1000);
  };

  render() {
    return (
      <img
        className="Dice"
        style={{ width: '200px' }}
        src={`/img/dice${this.state.imageIndex}.png`}
        alt="dice"
        onClick={this.handleClick}
      ></img>
    );
  }
}

export default Dice;
