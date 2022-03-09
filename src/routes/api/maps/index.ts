import search, { kilometersToMiles } from "$lib/Search";
import { HttpCode } from "$lib/support/HttpCode";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    const params = await request.json()

    if (!params.lat || !params.lng) {
        return {
            body: {
                message: "Missing lat and lng.",
                success: false,
            },
            status: HttpCode.BadRequest
        }
    }

    const p = {
        lat: params.lat,
        lng: params.lng,
        miles: Math.floor(kilometersToMiles(params.distance ?? 20))
    };

    const result = await search(p);

    return {
        body: result.location,
        status: HttpCode.Ok
    }
}