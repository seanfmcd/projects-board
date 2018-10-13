import React, { Component } from 'react';
import { AppHeader, Title, Divider, ProjectList } from './components'
import './App.css';

const currentProjectsArray = ["mott-survey", "hush-os", "white-label"]
const pastProjectsArray = ["warhol", "sitematch", "rise-gallery"]
const futureProjectsArray = ["fox", "aa", "national-express"]
class App extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <Title />
        </AppHeader>
        <h2>Current Projects</h2>
        <ProjectList projects={currentProjectsArray} />
        <Divider />
        <h2>Past Projects</h2>
        <ProjectList projects={pastProjectsArray} />
        <Divider />
        <h2>Future Projects</h2>
        <ProjectList projects={futureProjectsArray} />
        <Divider />
      </div>
    );
  }
}

export default App;
