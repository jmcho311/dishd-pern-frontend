import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App 
