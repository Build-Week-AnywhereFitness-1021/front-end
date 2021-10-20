import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login/Login';
import ClientPage from './components/Client/ClientPage';
import ClassForm from './components/Client/ClassForm';
import InstructorPage from './components/Instructor/InstructorPage';
import CreateClassForm from './components/Instructor/CreateClassForm';
import KettleBells from './Assets/KettleBells.jpg';

function App() {
  return (
    <div className="App">
      <Nav />
        <div className='bg-image'>
             <h2>Anytime. Anywhere. Fitness.</h2><br/>
             <h3>Your Fitness Journey Starts Here!</h3>

            <Route path="/instructor" component={InstructorPage}/>
            <Route path="/CreateClassForm" component={CreateClassForm}/>
            <Route path="/classes" component={ClassForm}/>
            <Route path="/client">
                <ClientPage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </div>
    </div>
  );
}

export default App;
