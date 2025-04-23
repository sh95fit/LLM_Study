import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return { user, isAuthenticated };
}
