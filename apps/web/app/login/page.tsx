'use client';

import LoginPage from '../components/Login/Login';

export default function LoginPageScreen() {
  return (
    <main className="flex min-h-screen w-full justify-center bg-white px-5 pb-[34px] pt-[62px]">
      <section className="w-full max-w-sm">
        <LoginPage />
        
      </section>
    </main>
  );
}