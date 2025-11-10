import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {

    const { signUpWithEmail, updateInfo, setUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleSignUpEmail = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoURL.value;
        const password = e.target.password.value;
        signUpWithEmail(email, password)
            .then(result => {
                const user = result.user;
                updateInfo({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });

                        const newUser = {
                            name: user.displayName,
                            email: user.email,
                            photo: user.photoURL
                        }

                        fetch("http://localhost:3000/users", {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                            })

                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className=''>
            <div className='mt-10 text-center text-2xl md:text-4xl font-bold'>
                <h2>CREATE A NEW ACCOUNT !</h2>
            </div>
            <div className="mt-10 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignUpEmail} className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Your Name" required />
                        <label className="label">Email</label>
                        <input name='email' type="text" className="input" placeholder="Your Email" required />
                        <label className="label">Photo URL</label>
                        <input name='photoURL' type="text" className="input" placeholder="Your Photo URL" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <button type='submit' className="btn hover:bg-sky-600 bg-sky-400 mt-4">Sign Up</button>
                        <p className='text-center font-bold text-xl'>Or</p>
                        <button className="btn bg-base-300 text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign up with Google
                        </button>
                        <p className='mt-5 font-bold text-center'>Already have an account? <span className='text-blue-600 hover:underline'><Link to="/auth/sign-in">Sign In</Link></span> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;