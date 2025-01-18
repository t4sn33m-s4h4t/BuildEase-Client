import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';
import { useAuth } from '../CustomHooks/useAuth';


export default function PrivateRoute({ children }) {
    const location = useLocation();
    const { user, loading } = useAuth()
    if (loading) {
        return <Loading />;
    }
    if (user && user.email) {
        return children;
    }
    
    return <Navigate to="/login" state={{ from: location.pathname }} />;
}