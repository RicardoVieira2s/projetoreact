# GoofrStore.PublisherApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publisherDelete**](PublisherApi.md#publisherDelete) | **DELETE** /publisher | Deletes a publisher
[**publisherGamesGet**](PublisherApi.md#publisherGamesGet) | **GET** /publisherGames | Gets all the publisher&#x27;s games
[**publisherGet**](PublisherApi.md#publisherGet) | **GET** /publisher | Gets a publisher
[**publisherPost**](PublisherApi.md#publisherPost) | **POST** /publisher | Creates a new publisher
[**publisherPut**](PublisherApi.md#publisherPut) | **PUT** /publisher | Updates a publisher

<a name="publisherDelete"></a>
# **publisherDelete**
> PublisherSchema publisherDelete(id)

Deletes a publisher

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.PublisherApi();
let id = "id_example"; // String | Publisher ID

apiInstance.publisherDelete(id, (error, data, response) => {
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
 **id** | **String**| Publisher ID | 

### Return type

[**PublisherSchema**](PublisherSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publisherGamesGet"></a>
# **publisherGamesGet**
> [GameSchema] publisherGamesGet(id)

Gets all the publisher&#x27;s games

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.PublisherApi();
let id = "id_example"; // String | Publisher ID

apiInstance.publisherGamesGet(id, (error, data, response) => {
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
 **id** | **String**| Publisher ID | 

### Return type

[**[GameSchema]**](GameSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publisherGet"></a>
# **publisherGet**
> [PublisherSchema] publisherGet(opts)

Gets a publisher

Gets a publisher by ID or gets all publishers if no ID is given

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.PublisherApi();
let opts = { 
  'id': "id_example" // String | Publisher ID
};
apiInstance.publisherGet(opts, (error, data, response) => {
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
 **id** | **String**| Publisher ID | [optional] 

### Return type

[**[PublisherSchema]**](PublisherSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publisherPost"></a>
# **publisherPost**
> PublisherSchema publisherPost(body)

Creates a new publisher

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.PublisherApi();
let body = new GoofrStore.PublisherSchema(); // PublisherSchema | 

apiInstance.publisherPost(body, (error, data, response) => {
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
 **body** | [**PublisherSchema**](PublisherSchema.md)|  | 

### Return type

[**PublisherSchema**](PublisherSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="publisherPut"></a>
# **publisherPut**
> PublisherSchema publisherPut(body, id)

Updates a publisher

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.PublisherApi();
let body = new GoofrStore.PublisherSchema(); // PublisherSchema | 
let id = "id_example"; // String | Publisher ID

apiInstance.publisherPut(body, id, (error, data, response) => {
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
 **body** | [**PublisherSchema**](PublisherSchema.md)|  | 
 **id** | **String**| Publisher ID | 

### Return type

[**PublisherSchema**](PublisherSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

