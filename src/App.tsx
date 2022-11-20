import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppContext } from './AppContext';
import Menu from './components/Menu';
import RegisterCard from './components/RegisterCard';

function App() {
  const { setUserName } = useAppContext();

  useEffect(() => {
    setUserName("World");
  }, []);

  return (
    <div className="w-full h-full relative">
      <Menu />
      <RegisterCard/>
    </div>
  );
}

export default App;
