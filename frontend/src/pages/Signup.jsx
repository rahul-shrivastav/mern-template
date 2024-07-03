import { Link } from "react-router-dom";
import { useState } from "react";
import usesignup from "../hooks/useSignup.js";


const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const { loading, signup } = usesignup()

    const handleEvent = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputs)
        await signup(inputs);
    };
    return (
        <>

            <div className="flex  flex-col items-center justify-center w-full h-screen bg-slate-100">
                <div className="w-11/12 h-fit bg-white shadow-2xl sm:w-4/5 md:w-2/3 xl:w-1/3 rounded-xl pt-10">

                    <h1 className="text-5xl font-mono font-extrabold text-center my-5 ">
                        -SIGNUP-
                    </h1>
                    <div className="text-center">
                        <span className="text-pink-400 text-4xl text-center font-mono font-extrabold">StayClues</span>
                    </div>

                    <form action="" className="flex p-6 flex-col items-center justify-center w-full " onSubmit={handleSubmit}>

                        <div className="m-6">
                            <label className="input input-bordered flex items-center gap-2 bg-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow btn-wide" placeholder="Fullname" value={inputs.fullName} name="fullName" onChange={handleEvent} />
                            </label>
                        </div>

                        <div className="m-6">
                            <label className="input input-bordered flex items-center gap-2 bg-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow btn-wide" placeholder="Username" value={inputs.username} name="username" onChange={handleEvent} />
                            </label>
                        </div>

                        <div className="m-6">
                            <label className="input input-bordered flex items-center gap-2 bg-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow btn-wide" placeholder="Password" value={inputs.password} name="password" onChange={handleEvent} />
                            </label>
                        </div>
                        <div className="m-6">
                            <label className="input input-bordered flex items-center gap-2 bg-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow btn-wide" placeholder="Confirm Password" value={inputs.confirmPassword} name="confirmPassword" onChange={handleEvent} />
                            </label>
                        </div>

                        <div className="">
                            <button className="btn border-none text-white btn-wide mt-7 bg-gradient-to-r from-pink-700 via-pink-500 to-pink-400  hover:bg-pink-400" type="submit" >Signup</button>
                        </div>

                        <div className="text-black m-10">
                            Already have an account ?
                            <Link to={"/login"} className=""> Login</Link>
                        </div>


                    </form>
                </div>


            </div>
        </>
    )
}

export default Signup