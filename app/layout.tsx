// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";  // 👈 이렇게 바꾸면 못 찾을 수가 없습니다.
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "하림산업 통합원가시스템",
  description: "식품 제조 원가 관리 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} min-h-screen bg-[#F8F9FA]`}>
        
        {/* 상단 헤더 */}
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 h-[64px] flex items-center">
          <div className="container mx-auto max-w-[1600px] flex items-center justify-between px-6">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-[#FF4444] rounded-md flex items-center justify-center text-white font-extrabold text-lg">H</div>
                 <span className="text-xl font-bold text-gray-800 tracking-tight">Harim System</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-gray-500">
                <Link href="/dashboard" className="hover:text-[#FF4444] transition-colors">통합 대시보드</Link>
                <Link href="#" className="hover:text-[#FF4444] transition-colors">생산 관리</Link>
                <Link href="#" className="hover:text-[#FF4444] transition-colors">자재/구매</Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">관리자 권한</span>
              <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-sm border border-white shadow-sm">KM</div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px]">
          {children}
        </main>
      </body>
    </html>
  );
}