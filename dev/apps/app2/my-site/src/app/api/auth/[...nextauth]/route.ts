// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// 他のプロバイダー (GitHub, Credentials, etc.) を必要に応じてインポート

// NextAuthの設定オブジェクト
const handler = NextAuth({
  // 認証プロバイダーの設定
  providers: [
    GoogleProvider({
      // 環境変数からクライアントIDとシークレットを取得
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ユーザー名とパスワード認証 (Credentials Provider) を追加することもできます
  ],
  // セッション設定 (JWTを使用するのが一般的)
  session: {
    strategy: "jwt",
  },
  // 認証ページのカスタマイズやコールバック設定などをここに追加できます
});

// App Routerでは、GETとPOSTのリクエストを両方エクスポートする必要があります
export { handler as GET, handler as POST };
