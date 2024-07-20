import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from 'react-router-dom'

const Model = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box bg-white">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form className="card-body" method="dialog">
            <h3 className="font-bold text-lg text-black">Please Login!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white"
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white"
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover text-red">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* login btn */}
            <div className="form-control mt-4">
              <input
                type="submit"
                value="Login"
                className="btn bg-green text-white"
              />
            </div>

            <p className="text-center my-2">
              Donot have an account?{" "}
              <Link to="/signup" className="underline text-red ml-1">
                Signup Now
              </Link>{" "}
            </p>

            <button 
            htmlFor="my_modal_5"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</button>
          </form>

          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle hover:bg-green hover:text-white bg-gray-200 border-gray-300" >
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white bg-gray-200 border-gray-300">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white bg-gray-200 border-gray-300">
            <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default Model
