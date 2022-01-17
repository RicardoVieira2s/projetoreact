# GoofrStore.ClientApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientDelete**](ClientApi.md#clientDelete) | **DELETE** /client | Deletes a client
[**clientGet**](ClientApi.md#clientGet) | **GET** /client | Gets a client
[**clientPut**](ClientApi.md#clientPut) | **PUT** /client | Updates a client

<a name="clientDelete"></a>
# **clientDelete**
> ClientSchema clientDelete(id)

Deletes a client

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.ClientApi();
let id = "id_example"; // String | Client ID

apiInstance.clientDelete(id, (error, data, response) => {
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

[**ClientSchema**](ClientSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientGet"></a>
# **clientGet**
> [ClientSchema] clientGet(opts)

Gets a client

Gets a client by ID or gets all clients if no ID is given

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.ClientApi();
let opts = { 
  'id': "id_example" // String | Client ID
};
apiInstance.clientGet(opts, (error, data, response) => {
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
 **id** | **String**| Client ID | [optional] 

### Return type

[**[ClientSchema]**](ClientSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientPut"></a>
# **clientPut**
> ClientSchema clientPut(body, id)

Updates a client

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.ClientApi();
let body = new GoofrStore.ClientSchema(); // ClientSchema | 
let id = "id_example"; // String | Client ID

apiInstance.clientPut(body, id, (error, data, response) => {
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
 **body** | [**ClientSchema**](ClientSchema.md)|  | 
 **id** | **String**| Client ID | 

### Return type

[**ClientSchema**](ClientSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

