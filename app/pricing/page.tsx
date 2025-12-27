// src/app/pricing/page.tsx
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      
      {/* 헤더 영역 */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Pricing Plans</h2>
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
          비즈니스에 맞는 요금제
        </h1>
        <p className="mt-4 text-xl text-slate-500">
          복잡한 절차 없이 바로 시작하세요. 14일 무료 체험이 포함됩니다.
        </p>
      </div>

      {/* 카드 그리드 */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Starter */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Starter</h3>
          <div className="my-4">
            <span className="text-4xl font-bold text-slate-900">₩0</span>
            <span className="text-slate-500">/월</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">개인 사용자를 위한 기본 플랜</p>
          <button className="w-full py-3 rounded-lg border border-blue-200 text-blue-600 font-bold hover:bg-blue-50 transition-colors">
            무료로 시작
          </button>
        </div>

        {/* Pro (강조) */}
        <div className="relative bg-slate-900 p-8 rounded-2xl shadow-xl transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">BEST</div>
          <h3 className="text-lg font-bold text-white">Pro</h3>
          <div className="my-4">
            <span className="text-4xl font-bold text-white">₩19,000</span>
            <span className="text-slate-400">/월</span>
          </div>
          <p className="text-slate-400 text-sm mb-6">성장하는 팀을 위한 최고의 선택</p>
          <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg">
            지금 업그레이드
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Enterprise</h3>
          <div className="my-4">
            <span className="text-4xl font-bold text-slate-900">문의</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">대규모 조직을 위한 맞춤형 플랜</p>
          <button className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors">
            영업팀 문의
          </button>
        </div>

      </div>
    </div>
  );
}