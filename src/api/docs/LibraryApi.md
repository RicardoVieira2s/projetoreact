# GoofrStore.LibraryApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**libraryGet**](LibraryApi.md#libraryGet) | **GET** /library | Gets all the games the client has in his library

<a name="libraryGet"></a>
# **libraryGet**
> [GameSchema] libraryGet(id)

Gets all the games the client has in his library

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.LibraryApi();
let id = "id_example"; // String | Client ID

apiInstance.libraryGet(id, (error, data, response) => {
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

[**[GameSchema]**](GameSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

