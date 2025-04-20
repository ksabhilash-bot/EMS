import React,{useState,useEffect} from 'react';
import Headers from '../others/Header';
import AllTask from '../others/AllTask';
import CreateTask from '../others/CreateTask';

const AdminDashboard = ({admin}) => {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
      // Load employee data from localStorage initially
      const storedData = JSON.parse(localStorage.getItem('employee')) || [];
      setEmployeeData(storedData);
  
      // Listen for localStorage changes
      const handleStorageChange = () => {
        const updatedData = JSON.parse(localStorage.getItem('employee')) || [];
        setEmployeeData(updatedData);
      };
  
      window.addEventListener('storage', handleStorageChange);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

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
                <Headers emp={admin.name} />
                <div className='mt-4 md:mt-6 space-y-6 md:space-y-8'>
                    <CreateTask setEmployeeData={setEmployeeData}/>
                    <AllTask employeeData={employeeData}/>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;