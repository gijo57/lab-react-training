import profiles from './data/berlin.json';
import { Component } from 'react';
import FbUser from './FbUser';

class Facebook extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      users: profiles,
    };
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSort = (type) => {
    let sortedUsers;
    sortedUsers = this.state.users.sort((a, b) =>
      a[type].localeCompare(b[type])
    );
    this.setState({ users: sortedUsers });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="userSearch">Search users:</label>
          <input id="userSearch" onInput={this.handleSearch}></input>
        </form>
        <div className="sortButtons">
          Sort by:
          <button onClick={() => this.handleSort('firstName')}>
            First name
          </button>
          <button onClick={() => this.handleSort('lastName')}>Last name</button>
          <button onClick={() => this.handleSort('country')}>Country</button>
        </div>
        <ul className="usersList">
          {this.state.users
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
