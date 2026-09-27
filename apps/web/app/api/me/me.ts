import { strapiFetch, strapiUrl } from '../strapi';

export type CurrentUser = {
  username: string;
  email: string;
  avatarUrl: string | null;
};

export class CurrentUserError extends Error {
  constructor(readonly status: number) {
    super('Не удалось получить пользователя');
    this.name = 'CurrentUserError';
  }
}

export async function fetchCurrentUser() {
  const response = await strapiFetch('/api/users/me?populate=avatar');

  if (!response.ok) {
    throw new CurrentUserError(response.status);
  }

  return readCurrentUser(await response.json());
}

function readCurrentUser(payload: unknown): CurrentUser {
  if (
    !isRecord(payload) ||
    typeof payload.username !== 'string' ||
    payload.username.length === 0 ||
    typeof payload.email !== 'string' ||
    payload.email.length === 0
  ) {
    throw new CurrentUserError(502);
  }

  return {
    username: payload.username,
    email: payload.email,
    avatarUrl: readAvatarUrl(payload.avatar),
  };
}

function readAvatarUrl(avatar: unknown) {
  if (!isRecord(avatar) || typeof avatar.url !== 'string' || avatar.url.length === 0) {
    return null;
  }

  if (avatar.url.startsWith('http://') || avatar.url.startsWith('https://')) {
    return avatar.url;
  }

  return strapiUrl(avatar.url).toString();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}