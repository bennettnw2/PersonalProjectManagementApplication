import React, { Component } from "react";

import Header from "../../components/header-component";
import Form from "../../components/taskFormComponent";

class ProjectOverview extends Component {
  state = {
    state: {},
  };

  render() {
    return (
      <div>
        <Header>
          <h1>Project Overview</h1>
        </Header>

        <div class="container">
          <div class="row">
            <div class="col-md">
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectOverview;
