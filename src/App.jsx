import { useEffect, useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserInformation = localStorage.getItem('isLoggedIn');

    if (storedUserInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);


  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1'); // 1 is 'loggedIn' or true
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <main>
      {!isLoggedIn && <Login onLogin={loginHandler}/>}
      {isLoggedIn && <Home onLogout={logoutHandler}/>}
    </main>
  );
}

export default App;