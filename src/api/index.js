const goofrStore = require('./src');
const api = new goofrStore.ApiClient();
api.basePath = 'http://localhost:8080/api'

// CONSTANTES PARA OS SCHEMAS
const clientApi = new goofrStore.ClientApi(api);
const libraryApi = new goofrStore.LibraryApi(api);
const gameApi = new goofrStore.GameApi(api);
const storeApi = new goofrStore.StoreApi(api);
const topReviewedGames = new goofrStore.StatisticsApi(api);
const addressApi = new goofrStore.AddressApi(api);
const yourStore = new goofrStore.StoreApi(api);

export {
    libraryApi, clientApi, gameApi, storeApi, topReviewedGames, addressApi, yourStore
}