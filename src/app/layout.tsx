// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from './connect/providers'; 

export const metadata = {
  title: "Decentralized Medical Records",
  description: "Secure, decentralized health records on BASE network",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="p-4 max-w-6xl mx-auto">
        <Providers> 
          {children}
        </Providers>
        </main>

        
      </body>
    </html>
  );
}
