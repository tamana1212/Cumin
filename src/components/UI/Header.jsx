import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">
        Hello, Tamana! 👋
      </h1>
      <button
        onClick={() => console.log("Logout clicked")}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
      >
        Logout
      </button>
    </div>
  </header>
  )
}

export default Header