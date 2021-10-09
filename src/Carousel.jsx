import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
    };
  }

  handleClick = (event) => {
    let value =
      event.target.innerText === 'Left'
        ? this.state.imageIndex - 1
        : this.state.imageIndex + 1;
    if (value < 0) value = this.props.imgs.length - 1;
    if (value === this.props.imgs.length) value = 0;

    this.setState({ imageIndex: value });
  };

  render() {
    return (
      <div className="Carousel">
        <button onClick={this.handleClick}>Left</button>
        <img src={this.props.imgs[this.state.imageIndex]} alt="person" />
        <button onClick={this.handleClick}>Right</button>
      </div>
    );
  }
}

export default Carousel;
