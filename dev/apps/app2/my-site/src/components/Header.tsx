// components/Header.tsx
'use client'

import Link from "next/link";
import Image from "next/image";
import localImage from "./DeloitteNewLogo.jpg";
import AuthButton from "./AuthButton";
import { SessionProvider } from "next-auth/react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "1rem 2rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          
          
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            <Image src={localImage} alt="deloitte" width={150} height={50} />
          </Link>
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            D.Node Portal Site
          </Link>
        </div>
        <ul style={{ listStyle: "none", display: "flex", gap: "1.5rem" }}>
          <li>
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              Home
            </Link>
          </li>
          {/* 別のページへのリンク例 */}
          <li>
            <Link
              href="/about"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              Contact
            </Link>
            <SessionProvider>
              <AuthButton/>
            </SessionProvider>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
