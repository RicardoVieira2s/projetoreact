# GoofrStore.TagApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagDelete**](TagApi.md#tagDelete) | **DELETE** /tag | Deletes a tag
[**tagGet**](TagApi.md#tagGet) | **GET** /tag | Gets a tag
[**tagPost**](TagApi.md#tagPost) | **POST** /tag | Creates a new tag
[**tagPut**](TagApi.md#tagPut) | **PUT** /tag | Updates a tag

<a name="tagDelete"></a>
# **tagDelete**
> TagSchema tagDelete(id)

Deletes a tag

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.TagApi();
let id = "id_example"; // String | Tag ID

apiInstance.tagDelete(id, (error, data, response) => {
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
 **id** | **String**| Tag ID | 

### Return type

[**TagSchema**](TagSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tagGet"></a>
# **tagGet**
> [TagSchema] tagGet(opts)

Gets a tag

Gets a tag by ID or gets all tags if no ID is given

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.TagApi();
let opts = { 
  'id': "id_example" // String | Tag ID
};
apiInstance.tagGet(opts, (error, data, response) => {
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
 **id** | **String**| Tag ID | [optional] 

### Return type

[**[TagSchema]**](TagSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tagPost"></a>
# **tagPost**
> tagPost(body)

Creates a new tag

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.TagApi();
let body = new GoofrStore.TagSchema(); // TagSchema | 

apiInstance.tagPost(body, (error, data, response) => {
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
 **body** | [**TagSchema**](TagSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagPut"></a>
# **tagPut**
> tagPut(body, id)

Updates a tag

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.TagApi();
let body = new GoofrStore.TagSchema(); // TagSchema | 
let id = "id_example"; // String | Tag ID

apiInstance.tagPut(body, id, (error, data, response) => {
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
 **body** | [**TagSchema**](TagSchema.md)|  | 
 **id** | **String**| Tag ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

