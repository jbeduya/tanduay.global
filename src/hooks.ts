import cookie from 'cookie'
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const raw_cookies = event.request.headers.get('cookie') || ''
    const cookies = cookie.parse(raw_cookies)

    event.locals.accepted = !!cookies['warning_session']

    const response = await resolve(event)
    return response;
}


/** @type {import('@sveltejs/kit').HandleError} */
export async function handleError({ error, event }) {
    // example integration with https://sentry.io/
    console.log('error', error)
    console.log('error event', event)
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
    return {
        accepted: event.locals.accepted,
    }
}
