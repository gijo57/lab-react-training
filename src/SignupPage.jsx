import { Component } from 'react';

class SignupPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      validEmail: false,
      password: '',
      validPassword: true,
      nationality: '',
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });

    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        event.target.value
      )
    ) {
      this.setState({ validEmail: true });
    } else {
      this.setState({ validEmail: false });
    }
  };

  handleNationalityChange = (event) => {
    this.setState({ nationality: event.target.value });
  };

  handlePasswordChange = (event) => {
    if (!event.target.value.length) {
      this.setState({ validPassword: true });
    } else {
      if (event.target.value.length < 8) {
        this.setState({ validPassword: false });
      } else {
        this.setState({ validPassword: true });
      }
    }
  };

  render() {
    return (
      <div className="SignupPage">
        <form className="signupForm">
          <div className="mb-3">
            <label for="email-input" className="form-label">
              Email address
            </label>
            <input
              onInput={this.handleEmailChange}
              type="email"
              className={`form-control ${
                this.state.validEmail ? 'is-valid' : ''
              }`}
              id="email-input"
              aria-describedby="emailHelp"
            />
            <div class="valid-feedback">You typed a valid email</div>
          </div>
          <div className="mb-3">
            <label for="password-input" className="form-label">
              Password
            </label>
            <input
              onInput={this.handlePasswordChange}
              type="password"
              className={`form-control ${
                this.state.validPassword ? '' : 'is-invalid'
              }`}
              id="password-input"
            />
            <div class="invalid-feedback">Your password is too weak</div>
          </div>
          <div className="mb-3">
            <label for="nationality-input" className="form-label">
              Nationality
            </label>
            <select
              onChange={this.handleNationalityChange}
              id="nationality-input"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>-</option>
              <option value="de">German</option>
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
        <hr />
        <p>
          {(this.state.nationality === 'de' && 'Hallo') ||
            (this.state.nationality === 'en' && 'Hello') ||
            (this.state.nationality === 'fr' && 'Bonjour')}
        </p>
        <p>Your email address is: {this.state.email}</p>
      </div>
    );
  }
}

export default SignupPage;
