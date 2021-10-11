import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import Section from './components/Section';
import {Context} from './components/Context'

class App extends React.Component{
  render() {
    return (
      <Context>
        <div className="App">
          <Router>
            <Header />
            <Section />
          </Router>
          
        </div>
      </Context>
    )
  }
}

export default App;
