import { Component } from 'react';

class FbUser extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }

  handleExpandInfo = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { img, lastName, firstName, country, isStudent } = this.props.profile;
    const { isExpanded } = this.state;

    return (
      <li className="profile IdCard">
        <img onClick={this.handleExpandInfo} src={img} alt={lastName} />
        <div className={isExpanded ? 'info' : 'hidden'}>
          <div className="field">
            <strong>First name: </strong>
            <span>{firstName}</span>
          </div>
          <div className="field">
            <strong>Last name: </strong>
            <span>{lastName}</span>
          </div>
          <div className="field">
            <strong>Country: </strong>
            <span>{country}</span>
          </div>
          <div className="field">
            <strong>Type: </strong>
            <span>{(isStudent && 'Student') || 'Teacher'}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default FbUser;
