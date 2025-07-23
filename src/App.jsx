import { useState } from 'react'
//import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/manager'

import Footer from './components/Footer'
function App() {
  return (
    <>
 <div className="bg-gradient-to-b from-black to-indigo-500 min-h-screen">
    <Navbar />
    <Manager />
    <Footer />
     <div className="pa">
      
     </div>
    </div>
    </>
  )
}

export default App
