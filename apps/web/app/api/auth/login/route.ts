import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { login, password } = body;

<<<<<<< HEAD
    const strapiRes = await fetch('http://127.0.0.1:1337/api/auth/local', {
=======
    const strapiRes = await fetch('http://localhost:1337/api/auth/local', {
>>>>>>> 67bb54f69297a3f17090a18f1c53a952a642e008
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
<<<<<<< HEAD
      body: JSON.stringify({ 
        identifier: login,
        password 
      }),
=======
      body: JSON.stringify({ login, password }),
>>>>>>> 67bb54f69297a3f17090a18f1c53a952a642e008
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