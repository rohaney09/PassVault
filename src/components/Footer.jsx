import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white py-6 mt-10 shadow-inner">
  <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <div className="text-center md:text-left">
      <h2 className="text-xl font-bold tracking-wide text-blue-400">PassVault 🔒</h2>
      <p className="text-sm text-gray-400">Securely store your passwords with confidence.</p>
    </div>

    <div className="flex space-x-6 items-center">
      <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Privacy</a>
      <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Terms</a>
      <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Contact</a>
    </div>

    <div className="text-sm text-gray-500">
      © {new Date().getFullYear()} PassVault. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
