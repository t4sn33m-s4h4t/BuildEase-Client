import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAnnouncements = () => {
  const normalAxios = useAxiosSecure()
  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
    {
      queryKey: ["announcements"],
      queryFn: async () => {
        const response = await normalAxios.get('/announcements');
        return response.data;
      }
    })
  return {
    announcements: data || [],
    isLoading,
    refetch,
  };
};

export default useAnnouncements;
