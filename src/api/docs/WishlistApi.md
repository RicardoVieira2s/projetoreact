# GoofrStore.WishlistApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wishlistDelete**](WishlistApi.md#wishlistDelete) | **DELETE** /wishlist | Removes a game from the client&#x27;s wishlist
[**wishlistGet**](WishlistApi.md#wishlistGet) | **GET** /wishlist | Gets all the games the client has in his wishlist
[**wishlistPost**](WishlistApi.md#wishlistPost) | **POST** /wishlist | Adds a game to the client&#x27;s wishlist

<a name="wishlistDelete"></a>
# **wishlistDelete**
> GameSchema wishlistDelete(clientID, opts)

Removes a game from the client&#x27;s wishlist

Removes a game from the client wishlist by ID or removes all games from its wishlist if no game ID is given

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.WishlistApi();
let clientID = "clientID_example"; // String | Client ID
let opts = { 
  'gameID': "gameID_example" // String | Game ID
};
apiInstance.wishlistDelete(clientID, opts, (error, data, response) => {
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
 **clientID** | **String**| Client ID | 
 **gameID** | **String**| Game ID | [optional] 

### Return type

[**GameSchema**](GameSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="wishlistGet"></a>
# **wishlistGet**
> [GameSchema] wishlistGet(id)

Gets all the games the client has in his wishlist

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.WishlistApi();
let id = "id_example"; // String | Client ID

apiInstance.wishlistGet(id, (error, data, response) => {
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

<a name="wishlistPost"></a>
# **wishlistPost**
> wishlistPost(clientID, gameID)

Adds a game to the client&#x27;s wishlist

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.WishlistApi();
let clientID = "clientID_example"; // String | Client ID
let gameID = "gameID_example"; // String | Game ID

apiInstance.wishlistPost(clientID, gameID, (error, data, response) => {
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
 **clientID** | **String**| Client ID | 
 **gameID** | **String**| Game ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

