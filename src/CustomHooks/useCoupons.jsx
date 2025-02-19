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
      console.log(response)
        return response.data;
      },
}
)
  return {
    coupons: data || [],
    isLoading,
    refetch,
  };
};

export default useCoupons;
