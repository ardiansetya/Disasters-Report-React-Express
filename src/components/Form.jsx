import React from 'react'
import Button from './Button';

const Form = ({formTitle, formDesc}) => {
    const pLoginRegister = (formTitle) => {
      if (formTitle === "Welcome!") {
        return (
          <p className="text-center text-sm">
            Dont have any account?{" "}
            <a href="/register" className="hover:text-blue-600 font-bold">
              Register Here!
            </a>
          </p>
        );
      } else if (formTitle === "Welcome Back!") {
        return (
          <p className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="hover:text-blue-600 font-bold">
              Login Here!
            </a>
          </p>
        );
      }
    };
    
  return (
    <form className="flex flex-col gap-4 py-20 px-32 border-slate-200 border-4 rounded-xl shadow-md">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-blue-600">{formTitle}</h1>
        <p className="text-sm from-neutral-400">{formDesc}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold " htmlFor="email">
          Email
        </label>
        <input
          className="px-4 py-2 outline-none rounded-md ring-2 focus:ring-2 focus:ring-blue-600"
          type="password"
          name="password"
          placeholder="Enter your email here"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold " htmlFor="password">
          Password
        </label>
        <input
          className="px-4 py-2 outline-none rounded-md ring-2 focus:ring-2 focus:ring-blue-600"
          type="password"
          name="email"
          placeholder="Enter your password here"
        />
      </div>

      {pLoginRegister(formTitle)}

      <Button type='submit' variant="primary">Login</Button>
    </form>
  );
}

export default Form