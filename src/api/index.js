const goofrStore = require('./src');
const api = new goofrStore.ApiClient();
api.basePath = 'http://localhost:8080/api'

// CONSTANTES PARA OS SCHEMAS
const clientApi = new goofrStore.ClientApi(api);
const gameApi = new goofrStore.GameApi(api);
const storeApi = new goofrStore.StoreApi(api);
const topReviewedGames = new goofrStore.StatisticsApi(api);

export {
    clientApi, gameApi, storeApi, topReviewedGames
}