import axiosInstance from '../../services/axiosInstance'; // axiosInstance 

// 로그인 API 
export const loginAPI = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data; // 응답 데이터 반환
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Login failed');
  }
};

// 인증 상태 확인 API 
export const checkAuthAPI = async () => {
  try {
    const response = await axiosInstance.get('/auth/status');
    return response.data; // 응답 데이터 반환
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Not authenticated');
  }
};