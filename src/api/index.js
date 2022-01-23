

const goofrStore = require('./src');
const api = new goofrStore.ApiClient();
api.basePath = 'http://localhost:8080/api'

const clientApi = new goofrStore.ClientApi(api);
const gameApi = new goofrStore.GameApi(api);

export {
    clientApi, gameApi
}