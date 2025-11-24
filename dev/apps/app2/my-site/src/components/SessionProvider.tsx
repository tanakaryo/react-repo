// components/SessionProvider.tsx

"use client"; // クライアントコンポーネントとしてマーク

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

// SessionProviderをラップし、子コンポーネントにセッションを共有します
const SessionProvider: React.FC<Props> = ({ children }) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};

export default SessionProvider;
