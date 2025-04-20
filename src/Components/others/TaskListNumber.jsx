import React from 'react'

const TaskListNumber = ({data}) => {
  console.log("TLN",data) 
  const a =JSON.parse(localStorage.getItem('employee'))
  const b=a.find((emp)=>emp.id===data.id)
  console.log("b",b)
  return (
    <div className='flex flex-col md:flex-row  gap-4 mt-2 bg-black py-4 px-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        <div className="p-4 md:p-10 w-full md:w-[50%] bg-amber-400 rounded-3xl">
            <h2 className='text-3xl md:text-4xl font-semibold'>{b.taskCount.newTask}</h2>
            <h3 className='text-lg md:text-xl font-medium'>Tasks</h3>
        </div>
      
        <div className="p-4 md:p-10 w-full md:w-[50%] bg-rose-700 rounded-3xl">
            <h2 className='text-3xl md:text-4xl font-semibold'>{b.taskCount.completed}</h2>
            <h3 className='text-lg md:text-xl font-medium'>Completed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber