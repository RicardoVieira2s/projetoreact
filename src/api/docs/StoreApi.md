# GoofrStore.StoreApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**newStoreGet**](StoreApi.md#newStoreGet) | **GET** /newStore | Returns the new games from the store
[**noteworthyStoreGet**](StoreApi.md#noteworthyStoreGet) | **GET** /noteworthyStore | Returns featured games from the store
[**yourStoreGet**](StoreApi.md#yourStoreGet) | **GET** /yourStore | Client&#x27;s main store

<a name="newStoreGet"></a>
# **newStoreGet**
> NewStoreSchema newStoreGet(opts)

Returns the new games from the store

Returns the most recently released games. If provided, filters games by their tags

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.StoreApi();
let opts = { 
  'ids': ["ids_example"] // [String] | Tag ids
};
apiInstance.newStoreGet(opts, (error, data, response) => {
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
 **ids** | [**[String]**](String.md)| Tag ids | [optional] 

### Return type

[**NewStoreSchema**](NewStoreSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="noteworthyStoreGet"></a>
# **noteworthyStoreGet**
> NoteworthyStoreSchema noteworthyStoreGet(opts)

Returns featured games from the store

Returns the most purchased games from the store. If provided, filters games by their tags

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.StoreApi();
let opts = { 
  'ids': ["ids_example"] // [String] | Tag ids
};
apiInstance.noteworthyStoreGet(opts, (error, data, response) => {
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
 **ids** | [**[String]**](String.md)| Tag ids | [optional] 

### Return type

[**NoteworthyStoreSchema**](NoteworthyStoreSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yourStoreGet"></a>
# **yourStoreGet**
> YourStoreSchema yourStoreGet(opts)

Client&#x27;s main store

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.StoreApi();
let opts = { 
  'id': "id_example" // String | Client ID
};
apiInstance.yourStoreGet(opts, (error, data, response) => {
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

[**YourStoreSchema**](YourStoreSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

