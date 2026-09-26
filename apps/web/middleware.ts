import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicAssetPrefixes = ['/svg', '/png', '/_next', '/api'];

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hasJwt = Boolean(request.cookies.get('jwt')?.value);

  const isPublicAsset =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/svg') ||
    pathname.startsWith('/png') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico';

  if (isPublicAsset) {
    return NextResponse.next();
  }

  if (pathname === '/login') {
    if (hasJwt) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  }

  if (!hasJwt) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
