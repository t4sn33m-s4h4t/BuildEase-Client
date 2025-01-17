import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {    
  const normalAxios = useAxiosSecure() 
  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
   {
    queryKey: ["users"],
    queryFn: async () => {
        const response = await normalAxios.get('/users');
        return response.data;
      },
    keepPreviousData: true,
}
)
  return {
    users: data?.users || [],
    isLoading,
    refetch,
  };
};

export default useUsers;
