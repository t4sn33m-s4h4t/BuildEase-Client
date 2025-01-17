import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAgreements = () => {    
    const normalAxios = useAxios() 
    
  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
   {
    queryKey: ["agreements"],
    queryFn: async () => {
        const response = await normalAxios.get('/agreements');
        return response.data;
      },
    keepPreviousData: true,
}
)
  return {
    agreements: data?.agreements || [],
    isLoading,
    refetch,
  };
};

export default useAgreements;
