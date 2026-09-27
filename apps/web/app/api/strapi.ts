import { cookies } from 'next/headers';

export function strapiUrl(path: string) {
  const baseUrl = process.env.STRAPI_URL;

  if (!baseUrl) {
    throw new Error('STRAPI_URL не установлен');
  }

  return new URL(path, baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);
}

export async function strapiFetch(path: string, init?: RequestInit) {
  const headers = new Headers(init?.headers);
  const token = (await cookies()).get('jwt')?.value;

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  return fetch(strapiUrl(path), {
    ...init,
    headers,
    cache: 'no-store',
  });
}