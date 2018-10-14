import React, { Component, Fragment } from "react";
import {
  AppHeader,
  Title,
  Divider,
  ProjectList,
  H2,
  Popover
} from "./components";
import "./App.css";

const currentProjectsArray = ["mott-survey", "hush-os", "white-label"];
const pastProjectsArray = ["warhol", "sitematch", "rise-gallery"];
const futureProjectsArray = ["fox", "aa", "national-express"];
class App extends Component {
  state = { popoverOpen: false };
  handlePopover = () => this.setState({ popoverOpen: !this.state.popoverOpen });
  render() {
    return (
      <Fragment>
        <AppHeader>
          <Title />
        </AppHeader>

        <H2>Current Projects</H2>
        <ProjectList
          click={this.handlePopover}
          projects={currentProjectsArray}
        />
        <Divider />

        <H2>Past Projects</H2>
        <ProjectList click={this.handlePopover} projects={pastProjectsArray} />
        <Divider />

        <H2>Future Projects</H2>
        <ProjectList
          click={this.handlePopover}
          projects={futureProjectsArray}
        />
        <Divider />

        <Popover open={this.state.popoverOpen} />
      </Fragment>
    );
  }
}

export default App;
