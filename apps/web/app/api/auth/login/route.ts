import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { login, password } = body;

    const strapiRes = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    });

    const data = await strapiRes.json();

    if (!strapiRes.ok) {
      return NextResponse.json(
        { error: data.error?.message || 'Ошибка авторизации' },
        { status: strapiRes.status }
      );
    }

    const response = NextResponse.json({ user: data.user }, { status: 200 });

    response.cookies.set({
      name: 'jwt',
      value: data.jwt,
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, 
    });

    return response;
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}