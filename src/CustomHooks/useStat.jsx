import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useStat = () => {    
    const axiosSecure = useAxiosSecure() 
  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
   {
    queryKey: ["stat"],
    queryFn: async () => {
        const response = await axiosSecure.get('/stats');
        console.log(response)
        return response.data;
      },
    keepPreviousData: true,
}
)
  return {
    stats: data || [],
    isLoading,
    refetch,
  };
};

export default useStat;
