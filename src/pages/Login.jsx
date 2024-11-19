import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex mx-auto">
        <form className="card-body">
        <h1 className='text-5xl font-semibold'>Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p>If you have don't any Account <Link to='/auth/register' className='text-red-600'>Register Now</Link></p>
        </form>
      </div>
    );
};

export default Login;