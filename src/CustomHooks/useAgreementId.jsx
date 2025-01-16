import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAgreementId = ( userEmail ) => {
    const normalAxios = useAxios()
    const {
        data,
        isLoading,
        refetch,
    } = useQuery(
        {
            queryKey: ["agreement", userEmail],
            queryFn: async () => {
                const response = await normalAxios.get(`/agreement/${userEmail}`);
                return response.data;
            },

        }
    )
    
    return {
        agreement: data?.agreement || {},
        isLoading,
        refetch,
    };
};

export default useAgreementId;
