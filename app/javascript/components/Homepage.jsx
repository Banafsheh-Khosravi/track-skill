import React from "react";

export default class Homepage extends React.Component {
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
        </div>
      </div>
    );
  }
}
