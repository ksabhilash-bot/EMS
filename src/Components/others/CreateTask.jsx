import React,{useState,useRef} from 'react'

const CreateTask = ({setEmployeeData}) => {
  const [title,settitle]=useState('');
  const [date,setdate]=useState('');
  const [taskemployee,settaskemployee]=useState('');
  const [category,setcategory]=useState('');
  const [description,setdescription]=useState('');

  const newtask = useRef({});
  const handleForm=(e)=>{
    const taskId = `${taskemployee}-task-${Date.now()}`;
    e.preventDefault();
    newtask.current={id:taskId,title,date,category,description,newTask:true,completed:false,failed:false,};
    const data=JSON.parse(localStorage.getItem('employee'))
    data.forEach((elem)=>{
      if(elem.name===taskemployee){
        elem.taskCount.newTask+=1;
        const event = new Event('storage');
        window.dispatchEvent(event);
        elem.tasks.push(newtask.current);
      }
    })
    localStorage.setItem('employee', JSON.stringify(data));
    setEmployeeData(data);
    settitle('');
    setdate('');
    settaskemployee('');
    setcategory('');
    setdescription('');
  }

  return (
    <div className='p-4 md:p-6'>
      <div className='flex justify-center mb-6'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-white'>Create Task</h1>
      </div>
      
      <form onSubmit={handleForm} className='space-y-6'>
        {/* Top Row Inputs */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='space-y-2'>
            <h3 className='text-lg font-medium text-gray-300'>Task Title</h3>
            <input
              value={title}
              onChange={(e) => settitle(e.target.value)}
              type="text"
              placeholder="Task Title"
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            />
          </div>

          <div className='space-y-2'>
            <h3 className='text-lg font-medium text-gray-300'>Task Date</h3>
            <input
              value={date}
              onChange={(e) => setdate(e.target.value)}
              type="date"
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            />
          </div>

          <div className='space-y-2'>
            <h3 className='text-lg font-medium text-gray-300'>Assign To</h3>
            <input
              value={taskemployee}
              onChange={(e) => settaskemployee(e.target.value)}
              type="text"
              placeholder='employee name'
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            />
          </div>

          <div className='space-y-2'>
            <h3 className='text-lg font-medium text-gray-300'>Category</h3>
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              type="text"
              placeholder='Design,workout'
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* Description Textarea */}
        <div className='space-y-2'>
          <h3 className='text-center text-xl md:text-2xl font-bold text-white'>Task Description</h3>
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            rows={8}
            placeholder="Describe the task details..."
            className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className='flex justify-center'>
          <button 
            type="submit"
            className="cursor-pointer flex items-center rounded-full w-auto px-6 md:px-9 py-2 md:py-3 text-lg md:text-xl font-mono font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask