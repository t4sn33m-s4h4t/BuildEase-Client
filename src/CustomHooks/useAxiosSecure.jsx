import axios from 'axios';
import { useAuth } from '../CustomHooks/useAuth'; 
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,  
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
    
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


const useAxiosSecure = () => {
    const { signOutUser } = useAuth(); 
    const navigate = useNavigate()
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error?.response?.status === 401 || error?.response?.status === 403) {
                signOutUser(); 
                navigate('/login')
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxiosSecure;
