import React, { useState } from 'react'

const Login = ({handlelogin}) => {
  const [email,setemail]=useState('');
  const [pass,setpass]=useState('');
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false
  });

  const submitHandler = (e)=>{
    e.preventDefault();
    handlelogin(email,pass);
    setemail('');
    setpass('');
  }

  return (
    <div className='flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className="relative w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Please sign in to your account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={submitHandler}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                onFocus={() => setIsFocused({...isFocused, email: true})}
                onBlur={() => setIsFocused({...isFocused, email: false})}
                type="email"
                required
                className={`w-full px-4 py-3 text-white bg-white/5 border-2 rounded-lg transition-all duration-200 focus:outline-none ${
                  isFocused.email ? 'border-blue-500' : 'border-white/20'
                }`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                onFocus={() => setIsFocused({...isFocused, password: true})}
                onBlur={() => setIsFocused({...isFocused, password: false})}
                type="password"
                required
                className={`w-full px-4 py-3 text-white bg-white/5 border-2 rounded-lg transition-all duration-200 focus:outline-none ${
                  isFocused.password ? 'border-blue-500' : 'border-white/20'
                }`}
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-blue-400 group-hover:text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>

        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-lg -z-10"></div>
      </div>
    </div>
  )
}

export default Login