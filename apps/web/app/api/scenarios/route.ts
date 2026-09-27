import { NextResponse } from 'next/server';
import { ScenarioError, fetchScenarios } from './scenario';

export async function GET() {
  try {
    return NextResponse.json(await fetchScenarios());
  } catch (error) {
    if (error instanceof ScenarioError) {
      return NextResponse.json({ error: 'Не удалось получить сценарии' }, { status: error.status });
    }

    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}