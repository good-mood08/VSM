'use client';

import axios from 'axios';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

interface ILogged {
  onChange?: () => void;
}

export default function LoginPage({ onChange }: ILogged) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'idle'; message: string }>({
    type: 'idle',
    message: '',
  });

  async function pushData(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await axios.post('/api/auth/login', {
        login,
        password,
      });

      if (response.data?.user) {
        const rawRedirect = searchParams.get('redirect');
        const redirectTo = rawRedirect && rawRedirect.startsWith('/') && !rawRedirect.startsWith('//') ? rawRedirect : '/';

        setStatus({ type: 'success', message: 'Успешный вход. Перенаправление...' });

        setTimeout(() => {
          router.replace(redirectTo);
        }, 400);
        return;
      }

      setStatus({ type: 'error', message: 'Не удалось войти. Проверьте данные.' });
    } catch (error: any) {
      const message = error?.response?.data?.error || 'Ошибка авторизации';
      setStatus({ type: 'error', message });
    }
  }

  return (
    <div className="w-full max-w-sm px-0">
      <div className="mb-8 flex flex-col items-center gap-5 text-center">
        <div className="flex items-center justify-center">
          <Image src={'/svg/rzd-logo.svg'} width={90} height={40} alt="rzd-logo" className="h-auto w-24" />
        </div>
        <h2 className="font-ru-rail text-h3 text-accent">
          С Возвращением!
        </h2>
      </div>

      <form id="login-form" onSubmit={pushData} className="space-y-5">
        <div className="space-y-3">
          <label htmlFor="login" className="block text-h6 font-semibold text-addition">
            Email
          </label>
          <input
            id="login"
            type="email"
            value={login}
            onChange={(ev) => setLogin(ev.target.value)}
            placeholder="Ваша почта"
            className="w-full rounded-full border border-border bg-transparent px-7 py-4 text-h6 text-main outline-none placeholder:text-addition focus:border-accent"
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="password" className="block text-h6 font-semibold text-addition">
            Пароль
          </label>
          <div className="flex items-center justify-between rounded-full border border-border bg-transparent px-7 py-3.5 focus-within:border-accent">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Пароль"
              className="w-full bg-transparent pr-3 text-h6 text-main outline-none placeholder:text-addition"
            />
            <button
              type="button"
              aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              onClick={() => setShowPassword((prev) => !prev)}
              className="flex h-6 w-6 items-center justify-center text-addition"
            >
                <Image src={'/svg/eye.svg'} width={24} height={24} alt="eye" />
            </button>
          </div>
        </div>
      </form>

      <button
        type="submit"
        form="login-form"
        className="mt-8 flex w-full items-center justify-center rounded-full bg-accent py-4 text-h6 font-bold text-white transition hover:bg-accent/90"
      >
        Войти
      </button>

      {status.type !== 'idle' && (
        <div
          className={`mt-4 text-center text-h6 ${
            status.type === 'success' ? 'text-green-600' : 'text-accent'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="mt-5 text-center text-h6 font-semibold text-addition">или</div>

      <button
        type="button"
        onClick={onChange}
        className="mt-5 flex w-full items-center justify-center gap-3 rounded-full border border-main bg-transparent py-4 text-h6 font-semibold text-main transition hover:border-accent hover:text-accent"
      >
        <div className="h-5 w-11">
          <Image src={'/svg/rzd-logo.svg'} width={44} height={20} alt="rzd-logo" className="h-full w-full" />
        </div>
        <span>Продолжить с РЖД</span>
      </button>

      <button type="button" className="mt-7 block w-full text-center text-h6 font-semibold text-main">
        Забыли пароль?
      </button>
    </div>
  );
}