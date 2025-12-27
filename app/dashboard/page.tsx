// src/app/dashboard/page.tsx

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">대시보드에 오신 것을 환영합니다!</h1>
      <p className="text-xl">여기가 바로 두 번째 페이지입니다.</p>
      <p className="mt-2 text-slate-400">주소창을 보세요. /dashboard 로 바뀌었죠?</p>
      
      <div className="mt-10 p-6 bg-slate-800 rounded-lg border border-slate-700">
        <p>곧 여기에 구글 시트 데이터가 들어올 자리입니다.</p>
      </div>
    </div>
  );
}