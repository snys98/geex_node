import './App.css';

import {
  useContext,
  useEffect,
  useState,
} from 'react';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';
import Login from './Login';
import { AuthContext } from './providers/auth.provider';
import Users from './Users';

function App() {
  const { accessToken } = useContext(AuthContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(!!accessToken);
  }, [accessToken])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {isLoggedIn ? <Users /> : <Login />}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
