import React, { Component, Fragment } from 'react';
import { AppHeader, Title, Divider, ProjectList, H2 } from './components'
import './App.css';

const currentProjectsArray = ["mott-survey", "hush-os", "white-label"]
const pastProjectsArray = ["warhol", "sitematch", "rise-gallery"]
const futureProjectsArray = ["fox", "aa", "national-express"]
class App extends Component {
  render() {
    return (
      <Fragment>
        <AppHeader>
          <Title />
        </AppHeader>

        <H2>Current Projects</H2>
        <ProjectList projects={currentProjectsArray} />
        <Divider />

        <H2>Past Projects</H2>
        <ProjectList projects={pastProjectsArray} />
        <Divider />

        <H2>Future Projects</H2>
        <ProjectList projects={futureProjectsArray} />
        <Divider />
      </Fragment>
    );
  }
}

export default App;
