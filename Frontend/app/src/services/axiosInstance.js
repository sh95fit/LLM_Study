import axios from 'axios';

// axios 인스턴스를 설정합니다.
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // 기본 API URL을 설정합니다.
  timeout: 10000, // 요청 타임아웃 시간 (10초)
  headers: {
    'Content-Type': 'application/json', // 기본 Content-Type 설정
  },
});

// 요청 인터셉터 추가 (예: 토큰을 헤더에 추가)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // 예시로 로컬스토리지에서 토큰을 가져옵니다.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더에 토큰을 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가 (예: 오류 처리)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 오류 처리 (예: 401 오류가 발생하면 로그아웃 처리)
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login'; // 로그인 페이지로 리디렉션
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;