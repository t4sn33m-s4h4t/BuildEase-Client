import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAgreements = () => {    
    const axiosSecure = useAxiosSecure() 
    
  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
   {
    queryKey: ["agreements"],
    queryFn: async () => {
        const response = await axiosSecure.get('/agreements');
        return response.data;
      },
}
)
  return {
    agreements: data?.agreements || [],
    isLoading,
    refetch,
  };
};

export default useAgreements;
