import { useState } from 'react';
import { MdPersonAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useAuth } from '../CustomHooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import useImageUpload from '../CustomHooks/useImageUpload.jsx';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser, signInWithGoogle, signInWithGitHub } = useAuth();
    const { uploadImage } = useImageUpload();
    const [btnText, setbtnText] = useState("Register");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');
    const [photoError, setPhotoError] = useState('');

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;
        return hasUpperCase && hasLowerCase && hasMinLength;
    };

    const validateImage = (file) => {
        const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
        return file && allowedFormats.includes(file.type);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setbtnText('Registering...');
        if (!validatePassword(password)) {
            setPassError('Password must have at least one uppercase, one lowercase, and at least 6 characters.');
            return;
        }
        if (!validateImage(photo)) {
            setPhotoError('Unsupported image format. Please upload a JPG, PNG, or GIF file.');
            return;
        }

        setError('');
        setPhotoError('');
        try {
            const photoURL = await uploadImage(photo);
            const newUser = await createUser(email, password, name, photoURL);
            setUser(newUser);
            toast.success('User Registered Successfully!');
            setName('');
            setEmail('');
            setPhoto(null);
            setPassword('');
        } catch (error) {
            toast.error(error.message || 'Failed to Register. Please try again.');
        } finally {
            setbtnText('Register');
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        try {
            const newUser = await signInWithGoogle();
            setUser(newUser);
            navigate('/');
            toast.success('User Logged In Successfully!');
        } catch (error) {
            toast.error('Failed to sign in with Google.');
        }
    };

    const handleGitHubSignIn = async () => {
        setError('');
        try {
            const newUser = await signInWithGitHub();
            setUser(newUser);
            navigate('/');
            toast.success('User Logged In Successfully!');
        } catch (error) {
            toast.error('Another Account Exists with the Same Email.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:my-10 bg-white dark:bg-gray-800 shadow sm:rounded-md flex justify-center flex-1">
            <div className="flex-1 bg-indigo-100 dark:bg-gray-800 text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
                        }}
                    />
                </div>
                <div className="lg:w-1/2 xl:w-5/12 px-6 py-4 sm:p-12 sm:py-8">
                    <h2 className="text-dark text-center rubik-dirt-regular text-3xl font-bold text-gray-900 dark:text-white">Register</h2>
                    <div className="flex flex-col items-center">
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="w-full max-w-xs font-bold shadow-sm rounded-md py-3 bg-indigo-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow"
                                    aria-label="Sign in with Google"
                                >
                                    <div className="bg-white dark:bg-gray-800 p-2 rounded-full">
                                        <FaGoogle />
                                    </div>
                                    <span className="ml-4">Sign Up with Google</span>
                                </button>

                                <button
                                    onClick={handleGitHubSignIn}
                                    className="w-full max-w-xs font-bold shadow-sm rounded-md py-3 bg-indigo-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow mt-5"
                                    aria-label="Sign in with GitHub"
                                >
                                    <div className="bg-white dark:bg-gray-800 p-2 rounded-full">
                                        <FaGithub />
                                    </div>
                                    <span className="ml-4">Sign Up with GitHub</span>
                                </button>
                            </div>

                            <div className="my-6 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm tracking-wide font-medium bg-white dark:bg-gray-800 transform translate-y-1/2 text-purple-700 dark:text-purple-400">
                                    <Link to='/login'>Already Have An Account?</Link>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-md font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-800"
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    aria-label="Name"
                                    required
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-md font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-800 mt-5"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-label="Email"
                                    required
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-md font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-800 mt-5"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    aria-label="Password"
                                    required
                                />
                                {passError && <p className="text-red-500 text-sm mt-2">{passError}</p>}
                                <input
                                    className="w-full px-8 py-4 rounded-md font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-800 mt-5"
                                    type="file"
                                    accept="image/jpeg,image/png,image/gif"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                    aria-label="Photo Upload"
                                    required
                                />
                                {photoError && <p className="text-red-500 text-sm mt-2">{photoError}</p>}
                                <button
                                    type="submit"
                                    className="mt-5 tracking-wide font-semibold bg-purple-500 dark:bg-purple-700 text-gray-100 w-full py-4 rounded-md hover:bg-purple-700 dark:hover:bg-purple-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none"
                                >
                                    <MdPersonAdd />
                                    <span className="ml-3">{btnText}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Register;