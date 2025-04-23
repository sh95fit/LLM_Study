import React from 'react';
import { Outlet } from 'react-router-dom'; // 페이지 내에서 자식 컴포넌트를 렌더링하기 위한 컴포넌트

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
          {/* 네비게이션 메뉴 */}
        </nav>
      </header>
      <main>
        <Outlet /> {/* 여기에 실제 페이지가 렌더링됨 */}
      </main>
      <footer>
        {/* 푸터 */}
      </footer>
    </div>
  );
};

export default MainLayout;