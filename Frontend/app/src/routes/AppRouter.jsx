import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginLayout from '../layouts/LoginLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* MainLayout을 감싸는 라우트 설정 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} /> {/* 홈 페이지 */}
        </Route>

        {/* 로그인 페이지 라우트 설정 */}
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<LoginPage />} /> {/* 로그인 페이지 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;