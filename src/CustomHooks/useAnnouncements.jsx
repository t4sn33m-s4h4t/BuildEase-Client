import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAnnouncements = () => {
  const normalAxios = useAxios()
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
