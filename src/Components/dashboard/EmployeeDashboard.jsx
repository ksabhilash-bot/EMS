import React,{useState,useEffect} from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({emp}) => {
  
  const [employeeData, setEmployeeData] = useState(emp);
 
  useEffect(() => {
    
    const storedData = JSON.parse(localStorage.getItem('employee')) || [];
    const a=storedData.find((elem)=>elem.id===emp.id)
    
    setEmployeeData(a)
    // Listen for localStorage changes
    const handleStorageChange = () => {
      const updatedData = JSON.parse(localStorage.getItem('employee')) || [];
      setEmployeeData(updatedData);
   
  };
  window.addEventListener('storage', handleStorageChange)
  return ()=>{
    window.removeEventListener('storage', handleStorageChange)
  }
  }, [])
  

  return (
    <div className='relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className='relative p-4 md:p-6 lg:p-10'>
        <Header emp={emp.name}/>
        <div className='mt-4 md:mt-6 space-y-4 md:space-y-6'>
          <TaskListNumber data={employeeData} />
          <TaskList data={employeeData} setEmployeeData={setEmployeeData}/>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard