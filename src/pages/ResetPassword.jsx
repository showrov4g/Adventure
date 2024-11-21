import { sendPasswordResetEmail } from "firebase/auth";
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import auth from "../Firebase/Firebase.config";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const ResetPassword = () => {
  const{email} = useContext(AuthContext);
  const [resetEmail, setResetEmail] = useState(email);
  useEffect(()=>{
    document.title = "Eco | ResetPassword"
  },[])
 
  
  const emailRef = useRef()
  const handleReset =(e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    if(!email){
      toast.error("Please provide valid address")
    }else{
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        window.open('https://gmail.google.com', '_blank');
        toast.success("successfully send reset email");
      })
      .catch(error=>{
        toast.error(error);
      })
    }

  }

  return (
    <div className="w-3/12 mx-auto flex flex-col items-center justify-center bg-slate-200 rounded-xl shadow-lg  py-5">
      <form onSubmit={handleReset} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
          ref={emailRef}
            type="email"
            placeholder="email"
            value={resetEmail}
            className="input input-bordered"
            onChange={(e)=>{setResetEmail(e.target.value)}}
            required
          />
        </div>
   
        <div className="form-control mt-6">
          <button className="btn btn-primary">Reset email</button>
        </div>
      </form>
      <Link to='/'><button className="btn btn-primary">Go back to home</button></Link>
    </div>
  );
};

export default ResetPassword;
