import './index.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login/Login';
import ClientPage from './components/Client/ClientPage';
import ClassesList from './components/Classes/ClassesList';
import InstructorPage from './components/Instructor/InstructorPage';
import CreateClassForm from './components/Instructor/CreateClassForm';
import KettleBells from './Assets/KettleBells.jpg';

function App() {
  return (
    <div className="App">
      <Nav />
        <div className='bg-image'>
          
        <Switch>
            <Route path="/instructor" component={InstructorPage}/>
            <Route path="/CreateClassForm" component={CreateClassForm}/>
            <Route path="/classes" component={ClassesList}/>
            <Route path="/client">
                <ClientPage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
        </div>
    </div>
  );
}

export default App;
