import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useAuth } from './useAuth';

const useCheckAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const {data,isLoading} = useQuery({
            queryKey: ["userRole", user?.email],
            retry: false,
            queryFn: async () => {
                const response = await axiosSecure.get('/userRole', {
                    params: { email: user?.email }
                });
                return response.data;
            }
        })
    return {
        data,
        isLoading,
    };
};

export default useCheckAdmin;
