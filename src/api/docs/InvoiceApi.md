# GoofrStore.InvoiceApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoiceGet**](InvoiceApi.md#invoiceGet) | **GET** /invoice | Gets the client&#x27;s invoice history

<a name="invoiceGet"></a>
# **invoiceGet**
> [InvoiceSchema] invoiceGet(id)

Gets the client&#x27;s invoice history

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.InvoiceApi();
let id = "id_example"; // String | Client ID

apiInstance.invoiceGet(id, (error, data, response) => {
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

[**[InvoiceSchema]**](InvoiceSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

