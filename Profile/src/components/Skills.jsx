import React from 'react'

const Skills = ({ name, icon }) => {
  return (

    <div key="1" className="animate-bounce rounded overflow-hidden shadow-lg bg-white transition duration-300 transform hover:scale-105 max-w-md">
      <div className="flex items-center h-24 px-4 py-2"> {/* Adjusted padding */}
        <div className="w-3/4 pr-4"> {/* Set width to 75% of the container */}
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
        <div className="w-1/4">
          <img src={`icons/${icon}`} alt={name} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>

  )
}

export default Skills