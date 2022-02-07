# GoofrStore.StatisticsApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**topReviewsGet**](StatisticsApi.md#topReviewsGet) | **GET** /topReviews | Gets the top reviewed games

<a name="topReviewsGet"></a>
# **topReviewsGet**
> [TopReviewsSchema] topReviewsGet()

Gets the top reviewed games

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.StatisticsApi();
apiInstance.topReviewsGet((error, data, response) => {
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

[**[TopReviewsSchema]**](TopReviewsSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

