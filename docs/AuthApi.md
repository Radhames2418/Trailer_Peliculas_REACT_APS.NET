# TrailersAppapi.AuthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthLoginPost**](AuthApi.md#apiAuthLoginPost) | **POST** /api/Auth/login | 

<a name="apiAuthLoginPost"></a>
# **apiAuthLoginPost**
> apiAuthLoginPost(opts)



### Example
```javascript
import {TrailersAppapi} from 'trailers_appapi';

let apiInstance = new TrailersAppapi.AuthApi();
let opts = { 
  'body': new TrailersAppapi.UserLoginDto() // UserLoginDto | 
};
apiInstance.apiAuthLoginPost(opts, (error, data, response) => {
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
 **body** | [**UserLoginDto**](UserLoginDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

