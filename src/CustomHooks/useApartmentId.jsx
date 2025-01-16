import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useApartmentId = ( id ) => {
    const normalAxios = useAxios()
    const {
        data,
        isLoading,
        refetch,
    } = useQuery(
        {
            queryKey: ["apartment", id],
            queryFn: async () => {
                const response = await normalAxios.get(`/apartment/${id}`);
                return response.data;
            },

        }
    )
    
    return {
        apartment: data?.apartment || {},
        isLoading,
        refetch,
    };
};

export default useApartmentId;
