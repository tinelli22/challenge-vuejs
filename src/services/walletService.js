
const url = `http://localhost:3004/users`;
const headers = {"Content-type": "application/json; charset=UTF-8"};

export async function postWalletService(obj) {
    try {
        const resp = await fetch(url, {
            method: 'post',
            body: JSON.stringify(obj),
            headers,
        });
        console.log(resp);
        
    } catch (err) {
        console.error(err);
    }
}

export async function updateWalletService(obj) {
    try {
        const { id } = obj;
        return await fetch(`${url}/${id}`, {
            method: 'put',
            body: JSON.stringify(obj),
            headers,
        });
        
    } catch (err) {
        console.error(err);
    }
}

export async function getWalletsService(filters = { nome: '', sobrenome: '', email: '' }, pagination = { page: 0, limit: 10 }) {
    try {
        const { page, limit } = pagination;
        const { nome, sobrenome, email } = filters

        const resp = await fetch(`${url}?_page=${page}&_limit=${limit}&nome_like=${nome}&sobrenome_like=${sobrenome}&email_like=${email}`, {
            headers: {
                "Accept": "application/vnd.github+json"
            }
        });
      
        return await resp.json()
    } catch (err) {
        console.error(err);
    }
}


export async function deleteWalletService(id) {
    try {
        const resp = await fetch(`${url}/${id}`, {
            method: 'delete'
        });
        return await resp.json()
    } catch (err) {
        console.error(err);
    }
}