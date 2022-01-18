# GoofrStore.WalletApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBalanceGet**](WalletApi.md#addBalanceGet) | **GET** /addBalance | Adds balance to the client&#x27;s wallet
[**walletGet**](WalletApi.md#walletGet) | **GET** /wallet | Gets a client&#x27;s wallet
[**walletPut**](WalletApi.md#walletPut) | **PUT** /wallet | Updates a wallet

<a name="addBalanceGet"></a>
# **addBalanceGet**
> ClientWalletSchema addBalanceGet(id, amount)

Adds balance to the client&#x27;s wallet

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.WalletApi();
let id = "id_example"; // String | Client ID
let amount = 1.2; // Number | Amount to add

apiInstance.addBalanceGet(id, amount, (error, data, response) => {
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
 **amount** | **Number**| Amount to add | 

### Return type

[**ClientWalletSchema**](ClientWalletSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="walletGet"></a>
# **walletGet**
> ClientWalletSchema walletGet(id)

Gets a client&#x27;s wallet

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.WalletApi();
let id = "id_example"; // String | Client ID

apiInstance.walletGet(id, (error, data, response) => {
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

[**ClientWalletSchema**](ClientWalletSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="walletPut"></a>
# **walletPut**
> ClientWalletSchema walletPut(body, id)

Updates a wallet

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.WalletApi();
let body = new GoofrStore.ClientWalletSchema(); // ClientWalletSchema | 
let id = "id_example"; // String | Wallet ID

apiInstance.walletPut(body, id, (error, data, response) => {
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
 **body** | [**ClientWalletSchema**](ClientWalletSchema.md)|  | 
 **id** | **String**| Wallet ID | 

### Return type

[**ClientWalletSchema**](ClientWalletSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

