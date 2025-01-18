import React, { useState } from 'react';
import Title from '../Components/Shared/Title';
import { MdLogin } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useAuth } from '../CustomHooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { signIn, setUser, signInWithGoogle, signInWithGitHub } = useAuth();
    const [btnText, setbtnText] = useState("Login")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;
        return hasUpperCase && hasLowerCase && hasMinLength;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setbtnText('Logining...')
        setPassError('');
        if (!validatePassword(password)) {
            const errorMessage = "Password must have at least one uppercase, one lowercase, and at least 6 characters.";
            setPassError(errorMessage);
            toast.error(errorMessage);
            return;
        }

        setError('');
        try {
            const newUser = await signIn(email, password);
            setUser(newUser);
            toast.success("User Logged In Successfully!");
            navigate(location?.state?.from || '/');
        } catch (error) {
            toast.error(error.message || 'Failed to sign in. Please try again.');
        } finally {
            setbtnText('Login')
        }

        setEmail('');
        setPassword('');
    };

    const handleGoogleSignIn = async () => {
        setError('');
        try {
            const newUser = await signInWithGoogle();
            setUser(newUser);
            navigate(location?.state?.from || '/');
            toast.success("User Logged In Successfully!");
        } catch (error) {
            toast.error('Failed to sign in with Google.');
        }
    };

    const handleGitHubSignIn = async () => {
        setError('');
        try {
            const newUser = await signInWithGitHub();
            setUser(newUser);
            navigate(location?.state?.from || '/');
            toast.success("User Logged In Successfully!");
        } catch (error) {
            toast.error('Another Account Exists with the Same Email.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 px-6 py-4 sm:p-12 sm:py-8">
                    <h2 className="text-dark text-center rubik-dirt-regular text-3xl font-bold text-dark dark:text-white">Login</h2>
                    <div className="flex flex-col items-center">
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow"
                                    aria-label="Sign in with Google">
                                    <div className="bg-white p-2 rounded-full">
                                        <FaGoogle />
                                    </div>
                                    <span className="ml-4">Login with Google</span>
                                </button>

                                <button
                                    onClick={handleGitHubSignIn}
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow mt-5"
                                    aria-label="Sign in with GitHub">
                                    <div className="bg-white p-2 rounded-full">
                                        <FaGithub />
                                    </div>
                                    <span className="ml-4">Login with GitHub</span>
                                </button>
                            </div>

                            <div className="my-6 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm tracking-wide font-medium bg-white transform translate-y-1/2 text-purple-700">
                                    <Link to='/register'>Don't Have An Account?</Link>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-label="Email"
                                    required
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    aria-label="Password"
                                    required
                                />
                                {passError && <p className="text-red-500 text-sm mt-2">{passError}</p>}
                                <button
                                    type="submit"
                                    className="mt-5 tracking-wide font-semibold bg-purple-500 text-gray-100 w-full py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none">
                                    <MdLogin />
                                    <span className="ml-3">{btnText}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
