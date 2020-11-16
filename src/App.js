import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './config/routes'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      { routes }
      <Footer />
    </div>
  );
}

export default App 
