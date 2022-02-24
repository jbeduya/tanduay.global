import crypto from 'crypto';

const client_id = 'IF8';
const client_secret = '1777974CB8EBIF8 7980B58D824F';
const api_url = 'https://api.vtinfo.com/analytics/v2/finder';

interface APIHeaders {
    vipCustID: string;
    vipTimestamp: string;
    vipSignature: string;
}

export interface SearchQueryParams {
    codes?: string[];
    miles?: number;
    zip?: string;
    lat?: number;
    lng?: number;
}

function milesToKilometers(miles: number) {
    return miles * 1.609344;
}

export function kilometersToMiles(kilometers: number) {
    return kilometers * 0.621371;
}

function getHash(query: string) {
    return crypto.createHash('md5').update(query).digest('hex');
}

function getApiHeaders(params: URLSearchParams): [string, APIHeaders] {
    const d = (new Date(Date.now()));
    d.setSeconds(0);
    const timestamp = d.toUTCString();
    const signature = timestamp + client_secret + params.toString() + client_id;
    const hash = crypto.createHash('sha256').update(signature).digest('hex')
    const url = api_url + '?' + params.toString();

    return [url, {
        vipCustID: client_id,
        vipTimestamp: timestamp,
        vipSignature: hash
    }];
}

function generateHeaders(headers: APIHeaders) {
    return {
        'vipCustID': headers.vipCustID,
        'vipTimestamp': headers.vipTimestamp,
        'vipSignature': headers.vipSignature,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export default async function (query: SearchQueryParams) {
    let params = new URLSearchParams();
    params.append('action', 'results');
    params.append('miles', query?.miles?.toString() || '100');

    if (query?.zip) {
        params.append('zip', query?.zip);
    }

    if (query?.lat && query?.lng) {
        params.append('lat', query?.lat.toString());
        params.append('long', query?.lng.toString());
    }

    let [url, headers] = getApiHeaders(params);

    let result = await fetch(url, {
        headers: generateHeaders(headers)
    })

    return await result.json();
}


export async function brands() {
    let params = new URLSearchParams({
        action: 'brands'
    })

    let [url, headers] = getApiHeaders(params);

    let result = await fetch(url, {
        headers: generateHeaders(headers)
    })
    return await result.json();
}