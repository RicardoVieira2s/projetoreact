# GoofrStore.ServerApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthGet**](ServerApi.md#healthGet) | **GET** /health | Health check

<a name="healthGet"></a>
# **healthGet**
> &#x27;String&#x27; healthGet()

Health check

Checks the server health status

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.ServerApi();
apiInstance.healthGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

