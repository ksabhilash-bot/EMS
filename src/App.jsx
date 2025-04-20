import React, { useContext } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/dashboard/EmployeeDashboard'
import AdminDashboard from './Components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect,useState } from 'react'
import { employee,admin } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'    

const App = () => {
   useEffect(() => {
    // Only set localStorage if it doesn't exist
    if (!localStorage.getItem('employee') || !localStorage.getItem('admin')) {
      setLocalStorage();
    }
  }, []);
  // Empty dependency array means this only runs once on mount
  
  const [user,setuser] = useState(null)
  const [loginuser,setloginuser]=useState(null)
  const [employeeData, setEmployeeData] = useState(null);
  const handleLogin = (email, password) => {
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
  
    const foundAdmin = admin.find(adm => adm.email === email && adm.password === password);
    if (foundAdmin) {
      setuser("admin");
      setloginuser(foundAdmin);
      setEmployeeData(foundAdmin);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin'}));
      return;
    }
  
    const foundEmployee = employee.find(emp => emp.email === email && emp.password === password);
    if (foundEmployee) {
      setuser("employee");
      setloginuser(foundEmployee);
      
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
      setEmployeeData(foundEmployee);
      return;
    }
  
    alert("Invalid Credentials");
  };
  useEffect(() => {
    if (employeeData) {
      console.log("Updated employeeData");
    }
  }, [employeeData]);
  
  
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('loggedInUser');
  //   if(loggedInUser)
  //   {
  //     const userData = JSON.parse(loggedInUser);
  //     setuser(userData.role);
  //     setloginuser(userData.data);
  //   }
  // }, [])

  
  return (
    <>
    {!user ? <Login handlelogin={handleLogin}/>:''}
    {user == "admin"?<AdminDashboard admin={employeeData}/>:''}
    {user == "employee"?<EmployeeDashboard emp={employeeData} />:''}
    
    
    </>
  )
}

export default App