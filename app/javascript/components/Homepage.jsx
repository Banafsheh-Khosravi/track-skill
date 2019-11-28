import React from "react";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="container-fluid p-0 bg_primary-color">
        <div className="row">
          <div className="col-12 col-lg-6 bg_secondary-color d-none d-sm-block">
            <div className="container primary-color">
              <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="container">
                  <h1 className="display-4">
                    Welcome to the employee skill tracker
                  </h1>
                  <hr className="my-4 bg_primary-color" />
                  <p className="lead">Track your employee skills with ease.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 bg_primary-color">
            <div className="vh-100 secondary-color d-flex justify-content-center align-items-center">
              <div className="col-12 col-lg-8">
                <div className="container d-block d-sm-none">
                  <h4 className="">Welcome to the employee skill tracker</h4>
                  <p className="lead">Track your employee skills with ease.</p>
                  <hr className="my-4 bg_primary-color" />
                </div>
                <div className="container">
                  <div className="login-form">
                    <h4 className="mb-4">Log into your account</h4>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={this.state.email}
                          onChange={this.onChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.onChange}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                      {this.state.token}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
