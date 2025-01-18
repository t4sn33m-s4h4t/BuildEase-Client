import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../CustomHooks/useAuth';

export default function SecureRoutes({ children }) {
    const { user } = useAuth()
    const location = useLocation()

    if (!(user && user.email)) {
        return children;
    }
    return <Navigate to={location?.state?.from || '/'}/>;
}