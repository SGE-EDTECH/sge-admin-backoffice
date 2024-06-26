import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const PrivateRoute = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const router = isClient ? useRouter() : null;

  useEffect(() => {
    if (isClient) {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }
    }
  }, [isClient, router]);

  if (!isClient) {
    return null; // Renderize null no lado do servidor
  }

  return <>{children}</>;
};

export default PrivateRoute;
