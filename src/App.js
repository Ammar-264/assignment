import logo from './logo.svg';
import './App.css';
import SignUp from './pages/signup/signup';
import LogIn from './pages/login/login';
import RouterDom from './router/router';



function App() {
  return (
    <div className="App">
    {/* <SignUp/> */}
    <RouterDom/>
    </div>
  );
}

export default App;
