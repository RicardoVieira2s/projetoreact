# GoofrStore.SearchApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchGameGet**](SearchApi.md#searchGameGet) | **GET** /searchGame | Search games
[**searchHistoryGet**](SearchApi.md#searchHistoryGet) | **GET** /searchHistory | Gets the client&#x27;s search history
[**searchHistoryPost**](SearchApi.md#searchHistoryPost) | **POST** /searchHistory | Adds a search to the client&#x27;s history
[**searchTagGet**](SearchApi.md#searchTagGet) | **GET** /searchTag | Search tags

<a name="searchGameGet"></a>
# **searchGameGet**
> [GameSchema] searchGameGet(search)

Search games

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.SearchApi();
let search = "search_example"; // String | Search query

apiInstance.searchGameGet(search, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search query | 

### Return type

[**[GameSchema]**](GameSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchHistoryGet"></a>
# **searchHistoryGet**
> [SearchSchema] searchHistoryGet(id)

Gets the client&#x27;s search history

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.SearchApi();
let id = "id_example"; // String | Client ID

apiInstance.searchHistoryGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client ID | 

### Return type

[**[SearchSchema]**](SearchSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchHistoryPost"></a>
# **searchHistoryPost**
> searchHistoryPost(clientID, gameID)

Adds a search to the client&#x27;s history

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.SearchApi();
let clientID = "clientID_example"; // String | Client ID
let gameID = "gameID_example"; // String | Game ID

apiInstance.searchHistoryPost(clientID, gameID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientID** | **String**| Client ID | 
 **gameID** | **String**| Game ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchTagGet"></a>
# **searchTagGet**
> [TagSchema] searchTagGet(search)

Search tags

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.SearchApi();
let search = "search_example"; // String | Search query

apiInstance.searchTagGet(search, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search query | 

### Return type

[**[TagSchema]**](TagSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

