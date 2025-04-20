import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = ({employeeData}) => {
  // const authData = useContext(AuthContext)
  // const data = JSON.parse(localStorage.getItem('employee'))

  return (
    <div className='bg-[#1c1c1c] p-3 md:p-5 rounded mt-5 h-auto min-h-[20rem] max-h-[40rem] overflow-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {employeeData.map((emp) => (
          <div 
            key={emp.id}
            className="bg-red-400 p-3 md:p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className='flex flex-col gap-2'>
              <h2 className='text-lg md:text-xl font-bold text-white'>{emp.name}</h2>
              
              <div className='grid grid-cols-2 gap-2 text-sm md:text-base'>
                <div className='bg-white/20 p-2 rounded'>
                  <span className='font-semibold'>Tasks:</span>
                  <span className='ml-2'>{emp.taskCount.newTask}</span>
                </div>
                
                <div className='bg-white/20 p-2 rounded'>
                  <span className='font-semibold'>Completed:</span>
                  <span className='ml-2'>{emp.taskCount.completed}</span>
                </div>
              
                
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask