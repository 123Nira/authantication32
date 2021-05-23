import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

function callApi(){
axios.get("http://localhost:3001/").then(response=>console.log(response.data))
.catch(error=>console.log(error.message))
}
function callProtectedApi(){
  axios.get("http://localhost:3001/protected").then(response=>console.log(response.data))
  .catch(error=>console.log(error.message))
}
  return (
    <div className="App">
      <h1>User Authenticated</h1>
      <ul>
        <li>
          <button onClick={ loginWithPopup }>Login with Popup</button>
        </li><br />
        <li>
          <button onClick={ loginWithRedirect }>Login with Redirect</button>
        </li><br />
        <li>
          <button onClick={ logout }>Logout</button>
        </li><br />

      </ul>
      <h3>User is { isAuthenticated ? "Logged in" : "Not Logged in" }</h3>

      <ul>
        <li>
          <button onClick={callApi}>Call API rout </button>
        </li><br />
        <li>
          <button onClick={callProtectedApi}>Call Protected API rout</button>
        </li>
      </ul>
      <pre style={ { textAlign: 'start' } }>{ JSON.stringify(user, null, 2) }</pre>
    </div>
  );
}

export default App;
