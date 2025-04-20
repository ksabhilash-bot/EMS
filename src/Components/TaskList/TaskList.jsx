import React from 'react';

const TaskList = ({ data, setEmployeeData }) => {
  const d = JSON.parse(localStorage.getItem('employee')) || [];
  const a = d.find((elem) => elem.id === data.id);

  const fn = (taskId) => {
    const employees = JSON.parse(localStorage.getItem('employee')) || [];
    const empIndex = employees.findIndex((e) => e.id === data.id);
    
    employees[empIndex].taskCount.completed+=1

    if (empIndex !== -1) {
      const updatedTasks = employees[empIndex].tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      );
      employees[empIndex].tasks = updatedTasks;
      
      localStorage.setItem('employee', JSON.stringify(employees));
      
      setEmployeeData(employees[empIndex]);
      console.log("empindex",employees[empIndex])
    }
  };

  return (
    <div className='bg-black h-[40vh] md:h-[50vh] w-full mt-2 py-5 px-2 md:px-5 flex gap-4 items-center justify-start flex-nowrap overflow-x-auto md:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
      {a.tasks
        .filter((t) => !t.completed)
        .map((t) => (
          <div
            key={t.id}
            className='flex-shrink-0 px-2 py-4 md:py-2 h-auto w-[280px] md:w-[300px] lg:w-[320px] bg-amber-300 rounded-3xl flex flex-col relative'
          >
            <div className='flex flex-col md:flex-row justify-between px-1 pt-2 gap-2'>
              <h3 className='text-xl md:text-2xl lg:text-3xl bg-transparent py-2 px-1 rounded-2xl'>
                {t.category}
              </h3>
              <h3 className='text-lg md:text-xl lg:text-2xl bg-transparent py-2 px-1 rounded-2xl'>
                {t.date}
              </h3>
            </div>
            <h2 className='text-lg md:text-xl lg:text-2xl font-semibold px-1'>{t.title}</h2>
            <p className='text-base md:text-lg px-1 mb-4'>{t.description}</p>

            <div className='mt-auto px-1'>
              <div className='flex flex-col sm:flex-row justify-between gap-2 pt-2'>
                <button
                  onClick={() => fn(t.id)}
                  className='cursor-pointer px-4 py-2 min-w-[3em] min-h-[2.4em] flex items-center justify-center gap-2 rounded-md text-[16px] md:text-[18px] font-bold text-neutral-100 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 hover:scale-110 active:scale-100'
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
