import './App.css';
import {Route, Switch} from 'react-router-dom';

import Nav from './components/Nav';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Nav />
      Anytime. Anywhere. Fitness.
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
