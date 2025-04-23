import React from 'react';
import { Outlet } from 'react-router-dom';

export default function LoginLayout({ children }) {
    return (
        <div className="auth-layout" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <h2 style={{ marginBottom: '20px' }}>Authentication</h2>
            <Outlet /> {/* 자식 라우트 렌더링 */}
        </div>
    );
}