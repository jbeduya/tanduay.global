import { v4 as uuidv4 } from 'uuid';
import { serialize } from 'cookie';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ request }) {
    const cookies = request.headers.cookie;

    return {
        body: {
            // demo: request.getCookie('warning_session'),
            cookies,
        }
    }
}

export async function post({ request }) {
    return {
        status: 200,
        headers: {
            'Set-Cookie': serialize('warning_session', uuidv4(), {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // 1 day
            }),
        },
        body: {}
    }
}
