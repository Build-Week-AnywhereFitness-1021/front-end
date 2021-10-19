import './App.css';
import {Route, Switch} from 'react-router-dom';

import Nav from './components/Nav';
import Login from './components/Login/Login';
import ClientPage from './components/Client/ClientForm';
import ClassForm from './components/Client/ClassForm';

function App() {
  return (
    <div className="App">
      <Nav />
      Anytime. Anywhere. Fitness.

      <Route path="/classes" component={ClassForm}/>
      <Route path="/client">
        <ClientPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
