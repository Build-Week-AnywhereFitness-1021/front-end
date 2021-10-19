import './App.css';
import {Route, Switch} from 'react-router-dom';

import Nav from './components/Nav';
import Login from './components/Login/Login';
import ClientPage from './components/Client/ClientPage';
import ClassForm from './components/Client/ClassForm';
import InstructorPage from './components/Instructor/InstructorPage';

function App() {
  return (
    <div className="App">
      <Nav />
      Anytime. Anywhere. Fitness.

      <Route path="/instructor" component={InstructorPage}/>
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
