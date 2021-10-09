import React from 'react';

const backgrounds = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      backgroundIndex: 0,
    };
  }

  handleClick = () => {
    if (this.state.backgroundIndex === backgrounds.length - 1) {
      this.setState({
        likes: this.state.likes + 1,
        backgroundIndex: 0,
      });
    } else {
      this.setState({
        likes: this.state.likes + 1,
        backgroundIndex: this.state.backgroundIndex + 1,
      });
    }
  };

  render() {
    return (
      <button
        style={{ backgroundColor: backgrounds[this.state.backgroundIndex] }}
        onClick={this.handleClick}
      >
        {this.state.likes} likes
      </button>
    );
  }
}

export default LikeButton;
