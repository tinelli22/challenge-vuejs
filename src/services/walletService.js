
const url = `http://localhost:3004/users`;
const headers = {"Content-type": "application/json; charset=UTF-8"};

export async function saveWalletService(obj, method = 'post') {
    try {
        const resp = await fetch(url, {
            method,
            body: JSON.stringify(obj),
            headers
        });
        console.log(resp);
        
    } catch (err) {
        console.error(err);
    }
}