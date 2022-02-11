# GoofrStore.NewsletterApi

All URIs are relative to *{protocol}://{host}:{port}/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**newsletterDelete**](NewsletterApi.md#newsletterDelete) | **DELETE** /newsletter | Removes an email from the newsletter list
[**newsletterGet**](NewsletterApi.md#newsletterGet) | **GET** /newsletter | Gets the list of emails subscribed to the newsletter
[**newsletterPost**](NewsletterApi.md#newsletterPost) | **POST** /newsletter | Adds an email to the newsletter list
[**sendNewsletterPost**](NewsletterApi.md#sendNewsletterPost) | **POST** /sendNewsletter | Sends a newsletter to all registered emails

<a name="newsletterDelete"></a>
# **newsletterDelete**
> NewsletterSchema newsletterDelete(email)

Removes an email from the newsletter list

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.NewsletterApi();
let email = "email_example"; // String | Email to unsubscribe

apiInstance.newsletterDelete(email, (error, data, response) => {
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
 **email** | **String**| Email to unsubscribe | 

### Return type

[**NewsletterSchema**](NewsletterSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="newsletterGet"></a>
# **newsletterGet**
> [NewsletterSchema] newsletterGet(opts)

Gets the list of emails subscribed to the newsletter

Gets one registered email or all registered emails

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.NewsletterApi();
let opts = { 
  'email': "email_example" // String | Email to search
};
apiInstance.newsletterGet(opts, (error, data, response) => {
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
 **email** | **String**| Email to search | [optional] 

### Return type

[**[NewsletterSchema]**](NewsletterSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="newsletterPost"></a>
# **newsletterPost**
> newsletterPost(email)

Adds an email to the newsletter list

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.NewsletterApi();
let email = "email_example"; // String | Email to subscribe

apiInstance.newsletterPost(email, (error, data, response) => {
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
 **email** | **String**| Email to subscribe | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sendNewsletterPost"></a>
# **sendNewsletterPost**
> sendNewsletterPost(body)

Sends a newsletter to all registered emails

### Example
```javascript
import {GoofrStore} from 'goofr_store';

let apiInstance = new GoofrStore.NewsletterApi();
let body = new GoofrStore.NewsletterBodySchema(); // NewsletterBodySchema | 

apiInstance.sendNewsletterPost(body, (error, data, response) => {
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
 **body** | [**NewsletterBodySchema**](NewsletterBodySchema.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

