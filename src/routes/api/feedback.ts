import { feedbackSchema } from "./validation_schema";

export async function post({ request }) {
    const body = await request.json();

    const { firstname, lastname, email, mobile, message } = body;
    const { value, error } = feedbackSchema.validate({ firstname, lastname, email, mobile, message }, { abortEarly: false });
    if (error) {
        return {
            status: 400,
            body: {
                'messsage': 'Some fields are required',
                detail: error.details.map(detail => detail.message)
            },
        };
        // or do something else
    }

    const apiKey = "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"
    const endpoint = "https://api.sendgrid.com/v3/mail/send"

    const datad = {
        personalizations: [
            {
                to: [
                    {
                        email: 'info@tanduayusa.com',
                        name: 'Tanduay USA'
                    },
                ]
            }
        ],
        from: {
            email: 'gail.pasiona@diffsigma.com',
            name: 'Tanduay Global Website Inquiry'
        },
        replyTo: {
            email: 'info@tanduayusa.com',
            name: 'Tanduay USA'
        },
        subject: 'Website Inquiry',
        content: [
            {
                type: 'text/html',
                value: '<p>Name: ' + firstname + " " + lastname + '</p><br>' + '<p>Email: ' + email + '</p><br>' + '<p>Mobile: ' + mobile + '</p><br>' + '<p>Message: ' + message,
            }
        ],

    };


    const action = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey,
        },
        body: JSON.stringify(datad)
    });

    // console.log(action.json();
    return {
        body: {
            message: 'We heard you.'
        },
        status: action.status
    }
}