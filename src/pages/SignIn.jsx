import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signInWithEmail, setUser, googleSignIn } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmail(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    title: "Signed In",
                    icon: "success",
                });
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }
                fetch("https://home-nest-server-green.vercel.app/users", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {

                    })
                Swal.fire({
                    title: "Signed In",
                    icon: "success",
                });
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            })
    }

    return (
        <div className=''>
            <title>Sign in to your account</title>
            <div className='mt-10 text-center text-2xl md:text-4xl font-bold'>
                <h2>SIGN IN TO YOUR ACCOUNT</h2>
            </div>
            <div className="mt-10 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignIn} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="text" className="input w-full" placeholder="Your Email" required />
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input name='password' type={showPassword ? "text" : "password"} className="input w-full" placeholder="Password" required />
                        </div>
                        <p className='text-red-500 underline hover:cursor-pointer'>Forgot Password?</p>
                        <button type='submit' className="btn hover:bg-sky-600 bg-sky-400 mt-4">Sign In</button>
                        <p className='text-center font-bold text-xl'>Or</p>
                        <button onClick={handleGoogleSignIn} className="btn bg-base-300 text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign in with Google
                        </button>
                        <p className='mt-5 font-bold text-center'>Don't have an account? <span className='text-blue-600 hover:underline'><Link to="/auth/sign-up">Sign Up</Link></span> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;