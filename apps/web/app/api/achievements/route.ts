import { NextResponse } from 'next/server';
import { AchievementError, fetchAchievements } from './achievement';

export async function GET() {
  try {
    return NextResponse.json(await fetchAchievements());
  } catch (error) {
    if (error instanceof AchievementError) {
      return NextResponse.json({ error: 'Не удалось получить достижения' }, { status: error.status });
    }

    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}