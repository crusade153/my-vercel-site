// src/app/dashboard/layout.tsx
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-[#F8F9FA]">
      
      {/* 왼쪽 사이드바 (LNB) */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block shrink-0 h-[calc(100vh-64px)] sticky top-[64px]">
        <div className="p-6">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Main Menu</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#FFF5F5] text-[#FF4444] font-bold transition-all">
                <span>📊</span> 통합 원가 현황
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-all">
                <span>🍚</span> HMR 제품군
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-all">
                <span>❄️</span> 냉동 식품군
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-all">
                <span>🧂</span> 소재/소스류
              </Link>
            </li>
          </ul>

          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 mt-8">Settings</h2>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-all">
                <span>⚙️</span> 기준 정보 관리
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* 메인 콘텐츠 영역 */}
      <div className="flex-1 p-8 overflow-y-auto">
        {children}
      </div>

    </div>
  );
}