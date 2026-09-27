import { strapiFetch, strapiUrl } from '../strapi';

export type ScenarioCard = {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  difficulty: string | null;
};

const difficultyLabel: Record<string, string> = {
  easy: 'Лёгкая',
  medium: 'Средняя',
  hard: 'Сложная',
  expert: 'Эксперт',
};

export class ScenarioError extends Error {
  constructor(readonly status: number) {
    super('Не удалось получить сценарии');
    this.name = 'ScenarioError';
  }
}

export async function fetchScenarios() {
  const response = await strapiFetch('/api/scenarios?populate=img&pagination[pageSize]=100&status=published');

  if (!response.ok) {
    throw new ScenarioError(response.status);
  }

  return readScenarios(await response.json());
}

function readScenarios(payload: unknown) {
  if (!isRecord(payload) || !Array.isArray(payload.data)) {
    throw new ScenarioError(502);
  }

  return payload.data.map(readScenario);
}

function readScenario(entry: unknown): ScenarioCard {
  if (!isRecord(entry) || typeof entry.name !== 'string' || entry.name.length === 0) {
    throw new ScenarioError(502);
  }

  const id = typeof entry.documentId === 'string' ? entry.documentId : typeof entry.id === 'number' ? String(entry.id) : '';

  if (!id) {
    throw new ScenarioError(502);
  }

  return {
    id,
    name: entry.name,
    description: typeof entry.description === 'string' ? entry.description : '',
    imageUrl: readImageUrl(entry.img),
    difficulty: readDifficulty(entry.complexity),
  };
}

function readDifficulty(complexity: unknown) {
  if (typeof complexity !== 'string') {
    return null;
  }

  const key = complexity.trim().toLowerCase();

  if (!key || key === 'ex:') {
    return null;
  }

  return difficultyLabel[key] ?? complexity.trim();
}

function readImageUrl(image: unknown) {
  if (!isRecord(image) || typeof image.url !== 'string' || image.url.length === 0) {
    return null;
  }

  if (image.url.startsWith('http://') || image.url.startsWith('https://')) {
    return image.url;
  }

  return strapiUrl(image.url).toString();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}