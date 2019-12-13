import React from 'react';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Blog from './components/blog';
import Nav from './components/nav';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  state = {
    pages:50
}
addPages = () => {
  this.setState({
      pages:99
  })
}
render() {
      return (
        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route exact path="/" render={()=> <Home title="My Home" addPages={this.addPages} pages={this.state.pages}/>}/>
              <Route path="/about"component={About}/>
              <Route path="/blog"component={Blog}/>
            </Switch>
          </div>
        </BrowserRouter>
  );
  }
}

export default App;
