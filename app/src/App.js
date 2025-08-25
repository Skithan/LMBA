import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import './App.css';


function App() {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    // Simulate loading (replace with your actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
       <LoadingScreen />
  );
}

export default App;
