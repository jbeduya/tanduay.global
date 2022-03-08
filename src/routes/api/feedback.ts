export async function post({ request }) {
    const body = await request.json();
    console.log(body);
    const { firstname, lastname, email, mobile, message } = body;

    // PROCESS ALL THE INFORMATION HERE

    return {
        body: {
            message: 'We heard you.'
        },
        status: 200
    }
}