import { strapiFetch } from '../strapi';

export type AchievementCard = {
  id: string;
  name: string;
  description: string;
  earned: boolean;
};

export type AchievementBoard = {
  completedScenarios: number;
  earnedCount: number;
  totalCount: number;
  achievements: AchievementCard[];
};

export class AchievementError extends Error {
  constructor(readonly status: number) {
    super('Не удалось получить достижения');
    this.name = 'AchievementError';
  }
}

export async function fetchAchievements(): Promise<AchievementBoard> {
  const userId = await fetchCurrentUserId();
  const [achievementsResponse, earnedResponse, historyResponse] = await Promise.all([
    strapiFetch('/api/achievements?pagination[pageSize]=100&status=published'),
    strapiFetch(
      `/api/user-achivments?populate=achievement&pagination[pageSize]=100&status=published&filters[users_permissions_user][id][$eq]=${userId}`,
    ),
    strapiFetch(
      `/api/user-scenarios?pagination[pageSize]=1&status=published&filters[users_permissions_user][id][$eq]=${userId}`,
    ),
  ]);

  if (!achievementsResponse.ok) {
    throw new AchievementError(achievementsResponse.status);
  }

  if (!earnedResponse.ok) {
    throw new AchievementError(earnedResponse.status);
  }

  if (!historyResponse.ok) {
    throw new AchievementError(historyResponse.status);
  }

  const earnedIds = readEarnedIds(await earnedResponse.json());
  const achievements = readAchievements(await achievementsResponse.json()).map((achievement) => ({
    ...achievement,
    earned: earnedIds.has(achievement.id),
  }));

  return {
    completedScenarios: readTotal(await historyResponse.json()),
    earnedCount: achievements.filter((achievement) => achievement.earned).length,
    totalCount: achievements.length,
    achievements,
  };
}

async function fetchCurrentUserId() {
  const response = await strapiFetch('/api/users/me');

  if (!response.ok) {
    throw new AchievementError(response.status);
  }

  const payload: unknown = await response.json();

  if (!isRecord(payload) || typeof payload.id !== 'number') {
    throw new AchievementError(502);
  }

  return payload.id;
}

function readAchievements(payload: unknown) {
  return readEntries(payload).map(readAchievement);
}

function readAchievement(entry: unknown): AchievementCard {
  if (!isRecord(entry) || typeof entry.name !== 'string' || entry.name.length === 0) {
    throw new AchievementError(502);
  }

  const id = readId(entry);

  if (!id) {
    throw new AchievementError(502);
  }

  return {
    id,
    name: entry.name,
    description: readBlocks(entry.description),
    earned: false,
  };
}

function readEarnedIds(payload: unknown) {
  const ids = new Set<string>();

  for (const entry of readEntries(payload)) {
    if (!isRecord(entry)) {
      continue;
    }

    const id = readId(entry.achievement);

    if (id) {
      ids.add(id);
    }
  }

  return ids;
}

function readEntries(payload: unknown) {
  if (!isRecord(payload) || !Array.isArray(payload.data)) {
    throw new AchievementError(502);
  }

  return payload.data;
}

function readTotal(payload: unknown) {
  if (!isRecord(payload) || !isRecord(payload.meta) || !isRecord(payload.meta.pagination)) {
    return 0;
  }

  return typeof payload.meta.pagination.total === 'number' ? payload.meta.pagination.total : 0;
}

function readId(entry: unknown) {
  if (!isRecord(entry)) {
    return '';
  }

  if (typeof entry.documentId === 'string' && entry.documentId.length > 0) {
    return entry.documentId;
  }

  return typeof entry.id === 'number' ? String(entry.id) : '';
}

function readBlocks(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }

  if (!Array.isArray(value)) {
    return '';
  }

  return value.map(readBlock).filter((text) => text.length > 0).join('\n');
}

function readBlock(node: unknown): string {
  if (!isRecord(node)) {
    return '';
  }

  if (typeof node.text === 'string') {
    return node.text;
  }

  if (!Array.isArray(node.children)) {
    return '';
  }

  return node.children.map(readBlock).join('');
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}