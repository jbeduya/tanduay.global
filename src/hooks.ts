import cookie from 'cookie'
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const raw_cookies = event.request.headers.get('cookie') || ''
    const cookies = cookie.parse(raw_cookies)

    if (event?.url?.pathname.startsWith('/warning')) {
        if (cookies['warning_session']) {
            return new Response(null, {
                status: 302,
                headers: {
                    Location: '/',
                },
            })
        }
    } else {
        if (!cookies?.warning_session) {
            return new Response(null, {
                status: 302,
                headers: {
                    Location: '/warning',
                }
            })
        }
    }

    const response = await resolve(event);
    return response;
}