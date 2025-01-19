import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useAuth } from './useAuth';

const usePaymentHistory = () => {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
    {
      queryKey: ["payments", user.email],
      queryFn: async () => {
        const response = await axiosSecure.get('/payment-history');
        return response.data;
      }
    })
  return {
    payments: data || [],
    isLoading,
    refetch,
  };
};

export default usePaymentHistory;
