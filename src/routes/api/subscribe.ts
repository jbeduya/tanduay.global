export async function post({ request }) {
    const body = await request.json();
    const { email } = body;

    // PROCESS THE EMAIL HERE

    return {
        body: {
            message: 'Thank you for subscribing.'
        },
        status: 200
    }
}