import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useApartments = ({ 
  page = 1, 
  limit = 6, 
  minRent, 
  maxRent, 
  sortRent = '' 
}) => {    
  const normalAxios = useAxios();
  
  const {
    data,
    isLoading,
    refetch,
  } = useQuery({ 
    queryKey: ["apartments", page, limit, minRent, maxRent, sortRent],
    queryFn: async () => { 
      const params = { 
        page, 
        limit 
      };
     
      if (minRent) params.minRent = minRent;
      if (maxRent) params.maxRent = maxRent;
      if (sortRent) params.sortRent = sortRent; 
 
      const response = await normalAxios.get('/apartments', { params });

      return response.data;
    }, 
    keepPreviousData: true
  });

  return {
    apartments: data?.apartments || [],
    count: data?.count || 0,
    sortOrder: data?.sortOrder || 'default',  
    isLoading,
    refetch,
  };
};

export default useApartments;