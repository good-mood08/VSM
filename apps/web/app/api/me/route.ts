import { NextResponse } from 'next/server';
import { CurrentUserError, fetchCurrentUser } from './me';

export async function GET() {
  try {
    return NextResponse.json(await fetchCurrentUser());
  } catch (error) {
    if (error instanceof CurrentUserError) {
      return NextResponse.json({ error: 'Не удалось получить пользователя' }, { status: error.status });
    }

    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}