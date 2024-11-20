import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import auth from "../Firebase/Firebase.config";

const ResetPassword = () => {
  const emailRef = useRef()
  const handleReset =(e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    if(!email){
      toast.error("Please provide valid address")
    }else{
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        toast.success("successfully send reset email");
      })
      .catch(error=>{
        toast.error(error);
      })
    }

  }

  return (
    <div>
      <form onSubmit={handleReset} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
          ref={emailRef}
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
   
        <div className="form-control mt-6">
          <button className="btn btn-primary">Reset email</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
