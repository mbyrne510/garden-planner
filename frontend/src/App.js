import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import GardenPlanner from './containers/GardenPlanner/GardenPlanner';
import { StylesProvider } from '@material-ui/styles';

class App extends Component {
  render() {
    return (
      <div>
        <StylesProvider injectFirst>
          <Layout>
            <GardenPlanner />
          </Layout>
        </StylesProvider>
      </div>
    )
  }
}

export default App;
