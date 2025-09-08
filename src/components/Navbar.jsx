import React from 'react'

const Navbar =() => {
  return (
    <div>
       <nav className ="bg-gray-800 p-1">
            <div className="container mx-auto flex justify-between items-center">
           <h1 className="text-transparent text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-800 drop-shadow-lg">
  PassVault
</h1>
<h1 className='text-3xl mr-325'>🔐 </h1>
            
            {/* <ul className="flex gap-10">
                <li><a href="#" className="text-white hover:text-gray-500 font-bold transition-all">Home</a></li>
                <li><a href="#" className ="text-white hover:text-gray-500 font-bold">About</a></li>
                <li><a href="#" className="text-white hover:text-gray-500 font-bold">Data</a></li>
            </ul> */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar
