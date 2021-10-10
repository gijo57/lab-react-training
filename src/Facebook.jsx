import profiles from './data/berlin.json';
import { Component } from 'react';
import FbUser from './FbUser';

class Facebook extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    console.log(searchTerm);
    return (
      <div>
        <form>
          <label htmlFor="userSearch">Search users:</label>
          <input onInput={this.handleSearch}></input>
        </form>
        <ul className="usersList">
          {profiles
            .filter((profile) => {
              return (
                profile.firstName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                profile.lastName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              );
            })
            .map((profile) => {
              return <FbUser key={profile.img} profile={profile} />;
            })}
        </ul>
      </div>
    );
  }
}

export default Facebook;
