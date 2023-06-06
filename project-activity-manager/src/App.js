import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './pages/NavigationBar/NavigationBar';
import FooterBar from './pages/FooterBar/FooterBar';

import Slider from './components/Slider';
import TextBox from './components/TextBox';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

import Boards from './pages/Boards/Boards';

const Home = () => {
  return ( <>
  <Slider/>
  </> );
}

const About = () => {
  return ( <>
  <TextBox/>
  </> );
}

const boards = () => {
  return ( <>
  <Boards/>
  </> );
}

const signin = () => {
  return ( <>
  <SignIn/>
  </> );
}

const signup = () => {
  return ( <>
  <SignUp/>
  </> );
}

function App() {
  return (
    <>
    <NavigationBar/>
    
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/boards" component={boards} />
        <Route path="/user/login" component={signin} />
        <Route path="/user/register" component={signup} />
      </Switch>
    </Router>

    <FooterBar/>
    </>
  );
}

export default App;
