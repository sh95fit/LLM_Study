export const loginAPI = async ({ email, password }) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

export const checkAuthAPI = async () => {
  const res = await fetch('/api/auth/status');
  if (!res.ok) throw new Error('Not authenticated');
  return res.json();
};