# GoofrStore.AccessApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessPut**](AccessApi.md#accessPut) | **PUT** /access | Updates a client access
[**loginPost**](AccessApi.md#loginPost) | **POST** /login | Log in to a client&#x27;s account
[**registerPost**](AccessApi.md#registerPost) | **POST** /register | Registers a client

<a name="accessPut"></a>
# **accessPut**
> accessPut(body, clientID)

Updates a client access

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.AccessApi();
let body = new GoofrStore.ClientAccessSchema(); // ClientAccessSchema | 
let clientID = "clientID_example"; // String | Client ID

apiInstance.accessPut(body, clientID, (error, data, response) => {
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
 **body** | [**ClientAccessSchema**](ClientAccessSchema.md)|  | 
 **clientID** | **String**| Client ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loginPost"></a>
# **loginPost**
> ClientSchema loginPost(body)

Log in to a client&#x27;s account

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.AccessApi();
let body = new GoofrStore.ClientAccessSchema(); // ClientAccessSchema | 

apiInstance.loginPost(body, (error, data, response) => {
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
 **body** | [**ClientAccessSchema**](ClientAccessSchema.md)|  | 

### Return type

[**ClientSchema**](ClientSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerPost"></a>
# **registerPost**
> ClientSchema registerPost(body)

Registers a client

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.AccessApi();
let body = new GoofrStore.RegisterClientSchema(); // RegisterClientSchema | 

apiInstance.registerPost(body, (error, data, response) => {
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
 **body** | [**RegisterClientSchema**](RegisterClientSchema.md)|  | 

### Return type

[**ClientSchema**](ClientSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

