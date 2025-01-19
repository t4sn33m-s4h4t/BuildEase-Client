import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useAuth } from './useAuth';

const useUsers = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
    {
      queryKey: ["users"],
      queryFn: async () => {
        const response = await axiosSecure.get('/users');
        return response.data;
      },
    }
  )
  return {
    users: data?.users || [],
    isLoading,
    refetch,
  };
};

export default useUsers;
