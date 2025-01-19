import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxios from './useAxios';

const useApartments = ({ page = 1, limit = 6, minRent, maxRent }) => {    
    const normalAxios = useAxios() 
  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
   {
    queryKey: ["apartments", page, limit],
    queryFn: async () => {
        const params = { page, limit };
    
        if (minRent) params.minRent = minRent;
        if (maxRent) params.maxRent = maxRent;
        const response = await normalAxios.get('/apartments', { params });

        return response.data;
      },
    
}
)
  return {
    apartments: data?.apartments || [],
    count: data?.count || 0,
    isLoading,
    refetch,
  };
};

export default useApartments;
