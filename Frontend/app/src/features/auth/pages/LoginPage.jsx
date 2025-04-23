import { useNavigate } from 'react-router-dom';
import LoginForm from '../../../components/LoginForm';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const handleLoginSuccess = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <LoginForm onSuccess={handleLoginSuccess} />
    </div>
  );
}
