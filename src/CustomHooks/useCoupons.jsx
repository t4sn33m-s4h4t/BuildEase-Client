import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useCoupons = () => {    
    const normalAxios = useAxios() 
  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
   {
    queryKey: ["coupons"],
    queryFn: async () => {
        const response = await normalAxios.get('/coupons');
        return response.data;
      },
    keepPreviousData: true,
}
)
  return {
    coupons: data || [],
    isLoading,
    refetch,
  };
};

export default useCoupons;
