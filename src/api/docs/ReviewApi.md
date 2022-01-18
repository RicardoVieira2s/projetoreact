# GoofrStore.ReviewApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameReviewsGet**](ReviewApi.md#gameReviewsGet) | **GET** /gameReviews | Gets all the reviews for a game
[**reviewDelete**](ReviewApi.md#reviewDelete) | **DELETE** /review | Deletes a review
[**reviewPost**](ReviewApi.md#reviewPost) | **POST** /review | Creates a new review
[**reviewPut**](ReviewApi.md#reviewPut) | **PUT** /review | Updates a review

<a name="gameReviewsGet"></a>
# **gameReviewsGet**
> [ReviewSchema] gameReviewsGet(id)

Gets all the reviews for a game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.ReviewApi();
let id = "id_example"; // String | Game ID

apiInstance.gameReviewsGet(id, (error, data, response) => {
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
 **id** | **String**| Game ID | 

### Return type

[**[ReviewSchema]**](ReviewSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reviewDelete"></a>
# **reviewDelete**
> ReviewSchema reviewDelete(id)

Deletes a review

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.ReviewApi();
let id = "id_example"; // String | Review ID

apiInstance.reviewDelete(id, (error, data, response) => {
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
 **id** | **String**| Review ID | 

### Return type

[**ReviewSchema**](ReviewSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reviewPost"></a>
# **reviewPost**
> ReviewSchema reviewPost(body)

Creates a new review

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.ReviewApi();
let body = new GoofrStore.ReviewSchema(); // ReviewSchema | 

apiInstance.reviewPost(body, (error, data, response) => {
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
 **body** | [**ReviewSchema**](ReviewSchema.md)|  | 

### Return type

[**ReviewSchema**](ReviewSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reviewPut"></a>
# **reviewPut**
> ReviewSchema reviewPut(body, id)

Updates a review

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.ReviewApi();
let body = new GoofrStore.ReviewSchema(); // ReviewSchema | 
let id = "id_example"; // String | Review ID

apiInstance.reviewPut(body, id, (error, data, response) => {
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
 **body** | [**ReviewSchema**](ReviewSchema.md)|  | 
 **id** | **String**| Review ID | 

### Return type

[**ReviewSchema**](ReviewSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

