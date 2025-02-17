import React from 'react'

const AllTasks = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 sm:p-6">
    <h2 className="text-xl font-bold text-white mb-4 sm:mb-6">All Tasks</h2>
    
    {/* Desktop Table View */}
    <div className="hidden sm:block overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-700 text-gray-300">
          <tr>
            <th className="p-4 text-left rounded-tl-lg">Title</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Due Date</th>
            <th className="p-4 text-left">Assigned To</th>
            <th className="p-4 text-left rounded-tr-lg">Category</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {/* {tasks.map((task) => ( */}
            <tr 
            //   key={task.id}
              className="border-b border-gray-700 hover:bg-gray-700/50 transition duration-200"
            >
              <td className="p-4 font-medium">454</td>
              <td className="p-4">ghg</td>
              <td className="p-4">454</td>
              <td className="p-4">fghfg</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-500">
                  fghgfh
                </span>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>

    {/* Mobile Card View */}
    <div className="sm:hidden space-y-4">
      {/* {tasks.map((task) => ( */}
        <div 
        //   key={task.id}
          className="bg-gray-700 rounded-lg p-4 space-y-3"
        >
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-white">sds</h3>
            <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-500">
             sdcs
            </span>
          </div>
          <p className="text-gray-300 text-sm">dsfsdf</p>
          <div className="text-sm text-gray-400 space-y-1">
            <div>Due:21321321</div>
            <div>Assigned: asdasd</div>
          </div>
        </div>
      {/* ))} */}
    </div>
  </div>
  )
}

export default AllTasks