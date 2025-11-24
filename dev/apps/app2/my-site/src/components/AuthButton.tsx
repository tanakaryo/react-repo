// components/AuthButton.tsx

"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from 'react';

const AuthButton: React.FC = () => {
  // useSessionフックでセッション情報を取得
  const { data: session, status } = useSession();
  
  // ロード中
  if (status === "loading") {
    return <p style={{ color: 'white' }}>Loading...</p>;
  }

  // ログイン済みの場合
  if (session) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ color: 'white' }}>
          Hello, {session.user?.name || session.user?.email}!
        </span>
        <button 
          onClick={() => signOut()} 
          style={{ 
            padding: '5px 10px', 
            backgroundColor: 'red', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Sign out
        </button>
      </div>
    );
  }

  // 未ログインの場合
  return (
    <button 
      onClick={() => signIn()} // デフォルトのログインページにリダイレクト
      style={{ 
        padding: '5px 10px', 
        backgroundColor: 'green', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Sign in
    </button>
  );
};

export default AuthButton;