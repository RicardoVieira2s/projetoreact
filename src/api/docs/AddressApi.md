# GoofrStore.AddressApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressGet**](AddressApi.md#addressGet) | **GET** /address | Gets a client&#x27;s address
[**addressPut**](AddressApi.md#addressPut) | **PUT** /address | Updates an address

<a name="addressGet"></a>
# **addressGet**
> ClientAddressSchema addressGet(id)

Gets a client&#x27;s address

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.AddressApi();
let id = "id_example"; // String | Client ID

apiInstance.addressGet(id, (error, data, response) => {
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

[**ClientAddressSchema**](ClientAddressSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressPut"></a>
# **addressPut**
> ClientAddressSchema addressPut(body, id)

Updates an address

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.AddressApi();
let body = new GoofrStore.ClientAddressSchema(); // ClientAddressSchema | 
let id = "id_example"; // String | Address ID

apiInstance.addressPut(body, id, (error, data, response) => {
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
 **body** | [**ClientAddressSchema**](ClientAddressSchema.md)|  | 
 **id** | **String**| Address ID | 

### Return type

[**ClientAddressSchema**](ClientAddressSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

