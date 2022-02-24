import crypto from 'crypto';
import axios from 'axios';

const client_id = 'IF8';
const client_secret = '1777974CB8EBIF8 7980B58D824F';
const params = 'action=results&lat=40.923710&long=-72.70866&miles=10';
// const params = 'action=brands';
const d = (new Date(Date.now()));
d.setSeconds(0);
const timestamp = d.toUTCString();
const signature = timestamp + client_secret + params + client_id;

const hash = crypto.createHash('sha256').update(signature).digest('hex');
const url = 'https://api.vtinfo.com/analytics/v2/finder?' + params;

console.log(signature);
console.log(hash);

axios.post(url, null, {
    headers: {
        'vipCustID': client_id,
        'vipTimestamp': timestamp,
        'vipSignature': hash
    }
}).then(res => {
    console.log(res.data)
});