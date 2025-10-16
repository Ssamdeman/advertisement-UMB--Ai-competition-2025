import React from 'react'

function App() {
  const handleClick = () => {
    console.log('Text clicked!')
    // Add your navigation logic here
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      {/* Large text in the middle */}
      <h1 className="text-6xl font-bold text-white mb-8">
        AI Ad Director
      </h1>
      
      {/* Clickable text below */}
      <button 
        onClick={handleClick}
        className="text-xl text-white hover:text-gray-300 transition-colors cursor-pointer underline"
      >
        Start Creating
      </button>
    </div>
  )
}

export default App