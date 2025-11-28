import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import LoadingScreen from '@/components/LoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { user, isAdmin, loading } = useAuth();

  console.log('ProtectedRoute - loading:', loading, 'user:', user?.email, 'isAdmin:', isAdmin, 'requireAdmin:', requireAdmin);

  if (loading) {
    console.log('ProtectedRoute - showing loading screen');
    return <LoadingScreen onComplete={() => {}} />;
  }

  if (!user) {
    console.log('ProtectedRoute - no user, redirecting to /auth');
    return <Navigate to="/auth" replace />;
  }

  if (requireAdmin && !isAdmin) {
    console.log('ProtectedRoute - user is not admin, redirecting to /');
    return <Navigate to="/" replace />;
  }

  console.log('ProtectedRoute - access granted');
  return <>{children}</>;
};

export default ProtectedRoute;
