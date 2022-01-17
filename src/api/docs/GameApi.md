# GoofrStore.GameApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameDelete**](GameApi.md#gameDelete) | **DELETE** /game | Deletes a game
[**gameGet**](GameApi.md#gameGet) | **GET** /game | Gets a game
[**gameImageDelete**](GameApi.md#gameImageDelete) | **DELETE** /gameImage | Removes an image from a game
[**gameImageGet**](GameApi.md#gameImageGet) | **GET** /gameImage | Gets all images of a game
[**gameImagePost**](GameApi.md#gameImagePost) | **POST** /gameImage | Adds an image to a game
[**gamePost**](GameApi.md#gamePost) | **POST** /game | Creates a new game
[**gamePut**](GameApi.md#gamePut) | **PUT** /game | Updates a game
[**gameTagDelete**](GameApi.md#gameTagDelete) | **DELETE** /gameTag | Removes a tag from a game
[**gameTagGet**](GameApi.md#gameTagGet) | **GET** /gameTag | Gets all tags of a game
[**gameTagPost**](GameApi.md#gameTagPost) | **POST** /gameTag | Adds a tag to a game

<a name="gameDelete"></a>
# **gameDelete**
> GameSchema gameDelete(id)

Deletes a game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let id = "id_example"; // String | Game ID

apiInstance.gameDelete(id, (error, data, response) => {
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

[**GameSchema**](GameSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gameGet"></a>
# **gameGet**
> [GameSchema] gameGet(opts)

Gets a game

Gets a game by ID or gets all games if no ID is given

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let opts = { 
  'id': "id_example" // String | Game ID
};
apiInstance.gameGet(opts, (error, data, response) => {
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
 **id** | **String**| Game ID | [optional] 

### Return type

[**[GameSchema]**](GameSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gameImageDelete"></a>
# **gameImageDelete**
> GameImageSchema gameImageDelete(id)

Removes an image from a game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let id = "id_example"; // String | Image ID

apiInstance.gameImageDelete(id, (error, data, response) => {
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
 **id** | **String**| Image ID | 

### Return type

[**GameImageSchema**](GameImageSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gameImageGet"></a>
# **gameImageGet**
> [GameImageSchema] gameImageGet(id)

Gets all images of a game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let id = "id_example"; // String | Game ID

apiInstance.gameImageGet(id, (error, data, response) => {
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

[**[GameImageSchema]**](GameImageSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gameImagePost"></a>
# **gameImagePost**
> gameImagePost(gameID, image)

Adds an image to a game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let gameID = "gameID_example"; // String | Game ID
let image = "image_example"; // String | Image URL

apiInstance.gameImagePost(gameID, image, (error, data, response) => {
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
 **gameID** | **String**| Game ID | 
 **image** | **String**| Image URL | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gamePost"></a>
# **gamePost**
> GameSchema gamePost(body)

Creates a new game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let body = new GoofrStore.GameSchema(); // GameSchema | 

apiInstance.gamePost(body, (error, data, response) => {
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
 **body** | [**GameSchema**](GameSchema.md)|  | 

### Return type

[**GameSchema**](GameSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gamePut"></a>
# **gamePut**
> GameSchema gamePut(body, id)

Updates a game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let body = new GoofrStore.GameSchema(); // GameSchema | 
let id = "id_example"; // String | Game ID

apiInstance.gamePut(body, id, (error, data, response) => {
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
 **body** | [**GameSchema**](GameSchema.md)|  | 
 **id** | **String**| Game ID | 

### Return type

[**GameSchema**](GameSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gameTagDelete"></a>
# **gameTagDelete**
> TagSchema gameTagDelete(gameID, tagID)

Removes a tag from a game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let gameID = "gameID_example"; // String | Game ID
let tagID = "tagID_example"; // String | Tag ID

apiInstance.gameTagDelete(gameID, tagID, (error, data, response) => {
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
 **gameID** | **String**| Game ID | 
 **tagID** | **String**| Tag ID | 

### Return type

[**TagSchema**](TagSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gameTagGet"></a>
# **gameTagGet**
> [TagSchema] gameTagGet(id)

Gets all tags of a game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let id = "id_example"; // String | Game ID

apiInstance.gameTagGet(id, (error, data, response) => {
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

[**[TagSchema]**](TagSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gameTagPost"></a>
# **gameTagPost**
> gameTagPost(gameID, tagID)

Adds a tag to a game

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.GameApi();
let gameID = "gameID_example"; // String | Game ID
let tagID = "tagID_example"; // String | Tag ID

apiInstance.gameTagPost(gameID, tagID, (error, data, response) => {
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
 **gameID** | **String**| Game ID | 
 **tagID** | **String**| Tag ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

