// src/app/dashboard/page.tsx
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      
      {/* 1. 상단 헤더 & 컨트롤 바 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">통합 원가 대시보드</h1>
          <p className="text-gray-500 text-sm mt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            실시간 데이터 연동 중 (Last update: 14:02 PM)
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            📅 기간 설정
          </button>
          <button className="px-4 py-2 bg-[#2D3436] text-white rounded-lg text-sm font-bold shadow-lg shadow-gray-200 hover:bg-black transition-all flex items-center gap-2">
            📥 리포트 다운로드
          </button>
        </div>
      </div>

      {/* 2. 핵심 KPI 카드 (반응형 그리드: 모바일 1열, PC 3열) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* KPI 1: 총 원가 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <div className="w-16 h-16 bg-[#FF4444] rounded-full"></div>
          </div>
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">12월 총 제조원가</h3>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-4xl font-extrabold text-gray-800 tracking-tight">24.5억</span>
            <span className="mb-1 text-sm font-bold text-[#FF4444] bg-[#FFF5F5] px-2 py-1 rounded-md">▼ 1.2%</span>
          </div>
          <p className="text-gray-400 text-xs mt-3">전월 대비 3,500만원 절감 달성</p>
        </div>

        {/* KPI 2: 원가율 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
          </div>
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">평균 원가율</h3>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-4xl font-extrabold text-gray-800 tracking-tight">62.8%</span>
            <span className="mb-1 text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">- 0.5%p</span>
          </div>
          <p className="text-gray-400 text-xs mt-3">목표 원가율(63%) 안정권 진입</p>
        </div>

        {/* KPI 3: 리스크 알림 */}
        <div className="bg-gradient-to-br from-[#FFF5F5] to-white p-6 rounded-2xl shadow-sm border border-[#FFE0E0] relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 p-4">
            <span className="animate-pulse w-3 h-3 bg-[#FF4444] rounded-full block"></span>
          </div>
          <h3 className="text-[#FF4444] text-sm font-bold uppercase tracking-wider">⚠ 원자재 가격 경보</h3>
          <div className="mt-4">
             <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 font-medium">돈육 (kg)</span>
                <span className="text-red-500 font-bold">▲ 3.4%</span>
             </div>
             <div className="w-full bg-red-100 rounded-full h-1.5">
                <div className="bg-[#FF4444] h-1.5 rounded-full" style={{ width: '75%' }}></div>
             </div>
          </div>
          <p className="text-[#FF4444] text-xs mt-3 font-medium">수급 불안정 예상, 재고 확보 필요</p>
        </div>
      </div>

      {/* 3. 메인 데이터 테이블 (카드형 리스트 디자인) */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            📦 제품별 원가 상세
            <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Total 8 Items</span>
          </h2>
          <div className="flex gap-2">
             <input type="text" placeholder="제품명 검색..." className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#FF4444] transition-all" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Product Name</th>
                <th className="px-6 py-4 text-right">Material Cost</th>
                <th className="px-6 py-4 text-right">Labor Cost</th>
                <th className="px-6 py-4 text-right">Total Cost</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              
              {/* Product Row 1 */}
              <tr className="group hover:bg-red-50/10 transition-colors">
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    HMR
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center text-xl mr-3">🍚</div>
                    <div>
                      <div className="font-bold text-gray-900">The미식 닭가슴살 볶음밥</div>
                      <div className="text-xs text-gray-500">Code: HMR-001</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-gray-600">1,250원</td>
                <td className="px-6 py-4 text-right text-gray-600">850원</td>
                <td className="px-6 py-4 text-right font-extrabold text-gray-900">2,100원</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 text-xs font-bold text-green-600 bg-green-50 rounded-md">Normal</span>
                </td>
              </tr>

              {/* Product Row 2 */}
              <tr className="group hover:bg-red-50/10 transition-colors">
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                    냉동
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center text-xl mr-3">🥟</div>
                    <div>
                      <div className="font-bold text-gray-900">육즙 팡팡 교자만두</div>
                      <div className="text-xs text-gray-500">Code: FRZ-204</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-gray-600">3,500원</td>
                <td className="px-6 py-4 text-right text-gray-600">1,800원</td>
                <td className="px-6 py-4 text-right font-extrabold text-[#FF4444]">5,300원</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 text-xs font-bold text-orange-600 bg-orange-50 rounded-md">Warning</span>
                </td>
              </tr>

              {/* Product Row 3 */}
              <tr className="group hover:bg-red-50/10 transition-colors">
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    HMR
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center text-xl mr-3">🌭</div>
                    <div>
                      <div className="font-bold text-gray-900">육즙가득 핫도그</div>
                      <div className="text-xs text-gray-500">Code: HMR-055</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-gray-600">2,800원</td>
                <td className="px-6 py-4 text-right text-gray-600">1,200원</td>
                <td className="px-6 py-4 text-right font-extrabold text-gray-900">4,000원</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 text-xs font-bold text-green-600 bg-green-50 rounded-md">Normal</span>
                </td>
              </tr>

               {/* Product Row 4 */}
               <tr className="group hover:bg-red-50/10 transition-colors">
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    소재
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center text-xl mr-3">🥣</div>
                    <div>
                      <div className="font-bold text-gray-900">사골 육수 베이스</div>
                      <div className="text-xs text-gray-500">Code: MAT-011</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-gray-600">15,000원</td>
                <td className="px-6 py-4 text-right text-gray-600">3,000원</td>
                <td className="px-6 py-4 text-right font-extrabold text-gray-900">18,000원</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 text-xs font-bold text-green-600 bg-green-50 rounded-md">Normal</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}