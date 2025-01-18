import { Navigate } from 'react-router-dom';
import  useCheckAdmin  from '../CustomHooks/useCheckAdmin.jsx';
import Loading from '../Pages/Loading.jsx';
import { useAuth } from '../CustomHooks/useAuth.jsx';

export default function AdminProtectedRoute({ children }) {
    const {data, isLoading} = useCheckAdmin()
    const { loading } = useAuth()
    if (isLoading || loading) {
        return <Loading />;
    }
    if (data?.userRole === 'admin') {
        return children;
    }
    return <Navigate to='/'/>;
}