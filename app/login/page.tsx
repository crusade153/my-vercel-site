// src/app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
        
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl font-bold mb-4">
            E
          </div>
          <h2 className="text-2xl font-bold text-slate-900">환영합니다</h2>
          <p className="mt-2 text-sm text-slate-500">관리자 대시보드에 접속하세요.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">이메일</label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              placeholder="admin@company.com"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">비밀번호</label>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">비밀번호 찾기</a>
            </div>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white font-bold hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all transform active:scale-95">
            로그인
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-slate-500">또는</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <span>Apple</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}