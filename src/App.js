import logo from './logo.svg';
import './App.css';
import LoginScreen from './login/login-screen';
import ProfileScreen from './login/profile-screen';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


      <div>
          <LoginScreen/>
          <ProfileScreen/>

      </div>
  );
}

export default App;
