import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useUsers = () => {    
    const normalAxios = useAxios() 
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
    count: data?.count || 0,
    isLoading,
    refetch,
  };
};

export default useUsers;
