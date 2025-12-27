// src/app/page.tsx
import Link from "next/link";
export default function Home() {
  return (
    // [1] 전체 화면 설정: 어두운 배경(bg-slate-950), 내용물 중앙 정렬(flex...)
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-10">

      {/* [2] 카드 박스 만들기 */}
      <div className="w-full max-w-md p-8 bg-slate-900 rounded-2xl shadow-[0_0_50px_-12px_rgb(59,130,246)] border border-slate-800 text-center">

         {/* [3] 멋진 그라데이션 제목 */}
        <h1 className="mb-6 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Level Up!
        </h1>

        {/* 본문 텍스트 */}
        <p className="text-slate-300 mb-10 text-xl leading-relaxed">
          구글 앱스스크립트의 한계를 넘어,<br/>
          <strong>Vercel & Next.js</strong>의 세계에 오신 것을<br/>
          환영합니다.
        </p>

<Link href="/dashboard">
  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
    다음 단계 시작하기 🚀
  </button>
</Link>

      </div>
    </main>
  );
}