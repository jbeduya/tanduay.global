import { brands } from "$lib/Search";

export async function get() {
    let records = await brands();
    return {
        body: records,
        status: 200
    }
}