// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
        
        {/* 브랜드 로고 강조 */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-12 h-12 bg-[#FF4444] rounded-lg flex items-center justify-center text-white font-extrabold text-2xl mb-4 shadow-lg shadow-red-200">
            H
          </div>
          <h1 className="text-2xl font-bold text-gray-800">원가관리 시스템</h1>
          <p className="text-gray-400 text-sm mt-2">Harim Industry ERP Login</p>
        </div>

        <form className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Employee ID</label>
            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF4444] focus:ring-1 focus:ring-[#FF4444] transition-all" placeholder="사번을 입력하세요" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Password</label>
            <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF4444] focus:ring-1 focus:ring-[#FF4444] transition-all" placeholder="비밀번호" />
          </div>

          <Link href="/dashboard" className="block mt-6">
            <button type="button" className="w-full bg-[#FF4444] hover:bg-[#E03333] text-white font-bold py-3.5 rounded-lg shadow-md shadow-red-200 transition-all transform active:scale-95">
              시스템 접속
            </button>
          </Link>
        </form>

        <p className="mt-8 text-xs text-gray-400">
          © 2025 Harim Industry Co., Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}