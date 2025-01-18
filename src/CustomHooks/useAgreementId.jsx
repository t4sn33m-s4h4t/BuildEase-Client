import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAgreementId = ( userEmail ) => {
    const secureAxios = useAxiosSecure()
    const {
        data,
        isLoading,
        refetch,
    } = useQuery(
        {
            queryKey: ["agreement", userEmail],
            queryFn: async () => {
                const response = await secureAxios.get(`/agreement/${userEmail}`,
                    {
                        params: {
                            email: userEmail
                        }
                    }
                );
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
