# GoofrStore.CartApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartDelete**](CartApi.md#cartDelete) | **DELETE** /cart | Removes a game from the client&#x27;s cart
[**cartGet**](CartApi.md#cartGet) | **GET** /cart | Gets all the games the client has in his cart
[**cartPost**](CartApi.md#cartPost) | **POST** /cart | Adds a game to the client&#x27;s cart
[**cartPurchaseGet**](CartApi.md#cartPurchaseGet) | **GET** /cartPurchase | Purchases all games the client has in his cart

<a name="cartDelete"></a>
# **cartDelete**
> GameSchema cartDelete(clientID, opts)

Removes a game from the client&#x27;s cart

Removes a game from the client cart by ID or removes all games from its cart if no game ID is given

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.CartApi();
let clientID = "clientID_example"; // String | Client ID
let opts = { 
  'gameID': "gameID_example" // String | Game ID
};
apiInstance.cartDelete(clientID, opts, (error, data, response) => {
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

<a name="cartGet"></a>
# **cartGet**
> [GameSchema] cartGet(id)

Gets all the games the client has in his cart

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.CartApi();
let id = "id_example"; // String | Client ID

apiInstance.cartGet(id, (error, data, response) => {
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

<a name="cartPost"></a>
# **cartPost**
> cartPost(clientID, gameID)

Adds a game to the client&#x27;s cart

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.CartApi();
let clientID = "clientID_example"; // String | Client ID
let gameID = "gameID_example"; // String | Game ID

apiInstance.cartPost(clientID, gameID, (error, data, response) => {
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

<a name="cartPurchaseGet"></a>
# **cartPurchaseGet**
> InvoiceSchema cartPurchaseGet(id)

Purchases all games the client has in his cart

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.CartApi();
let id = "id_example"; // String | Client ID

apiInstance.cartPurchaseGet(id, (error, data, response) => {
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

[**InvoiceSchema**](InvoiceSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

