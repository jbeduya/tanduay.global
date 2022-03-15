import { subscribeSchema } from "./validation_schema";

export async function post({ request }) {
    const requestBody = await request.json();
    const { email } = requestBody;
    const { value, error } = subscribeSchema.validate({ email }, { abortEarly: false });

    if (error) {
        return {
            status: 400,
            body: {
                error: 'invalid email',
            },
        };
        // or do something else
    }

    // PROCESS THE EMAIL HERE
    const apiKey = "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"
    const endpoint = "https://api.sendgrid.com/v3/marketing/contacts"

    const data = {
        "contacts": [
            {
                "email": email,
                "custom_fields": {
                    "e1_T": "Tanduay Global Website Subscribe",
                }
            }
        ]
    };

    const action = await fetch(endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey,
        },
        body: JSON.stringify(data)
    });

    console.log(action.status);

    return {
        body: {
            message: "Sendgrid API"
        },
        status: action.status
    }
}
