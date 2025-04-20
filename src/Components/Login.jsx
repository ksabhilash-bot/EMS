import React, { useState, useRef } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  // Prevent password from being logged
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Clear the password from memory after a short delay
    setTimeout(() => {
      if (passwordRef.current) {
        passwordRef.current.value = '';
        passwordRef.current.value = newPassword;
      }
    }, 0);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Clear sensitive data
    setEmail('');
    setPassword('');
    if (passwordRef.current) {
      passwordRef.current.value = '';
    }
  };

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className="border-2 border-black-400 p-20">
        <form 
          action="" 
          className='flex flex-col item-center justify-center gap-3' 
          onSubmit={submitHandler}
        >
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            type="email" 
            className='p-4 border-2 rounded-full text-xl outline-none bg-transparent'
            placeholder='Enter your email'
          />
          <input 
            ref={passwordRef}
            value={password}
            onChange={handlePasswordChange}
            required 
            type="password" 
            className='p-4 border-2 rounded-full text-xl outline-none bg-transparent'
            placeholder='Enter password'
            autoComplete="current-password"
          />
          <button 
            type="submit" 
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 focus:border-none font-medium px-2 py-2.5 me-2 mb-2 text-xl w-auto rounded-full"
          >
            Login
          </button>
        </form>
      </div>
      <div className='bg-red-400 h-[40%] w-full mt-7 py-5 pl-3 flex gap-5 items-center justify-start flex-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        {/* Existing code */}
      </div>
    </div>
  );
};

export default Login; 