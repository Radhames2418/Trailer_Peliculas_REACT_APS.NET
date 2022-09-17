# TrailersAppapi.TrailersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTrailersGetallGet**](TrailersApi.md#apiTrailersGetallGet) | **GET** /api/Trailers/getall | 
[**apiTrailersIdGet**](TrailersApi.md#apiTrailersIdGet) | **GET** /api/Trailers/{id} | 
[**createTrailer**](TrailersApi.md#createTrailer) | **POST** /api/Trailers | 
[**deleteTrailer**](TrailersApi.md#deleteTrailer) | **DELETE** /api/Trailers/{id} | 
[**updateTrailer**](TrailersApi.md#updateTrailer) | **PUT** /api/Trailers | 

<a name="apiTrailersGetallGet"></a>
# **apiTrailersGetallGet**
> [TrailersListDto] apiTrailersGetallGet(opts)



### Example
```javascript
import {TrailersAppapi} from 'trailers_appapi';

let apiInstance = new TrailersAppapi.TrailersApi();
let opts = { 
  'filters': "filters_example" // String | 
};
apiInstance.apiTrailersGetallGet(opts, (error, data, response) => {
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
 **filters** | **String**|  | [optional] 

### Return type

[**[TrailersListDto]**](TrailersListDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiTrailersIdGet"></a>
# **apiTrailersIdGet**
> TrailerDto apiTrailersIdGet(id, opts)



### Example
```javascript
import {TrailersAppapi} from 'trailers_appapi';

let apiInstance = new TrailersAppapi.TrailersApi();
let id = "id_example"; // String | 
let opts = { 
  'id': 56 // Number | 
};
apiInstance.apiTrailersIdGet(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **id** | **Number**|  | [optional] 

### Return type

[**TrailerDto**](TrailerDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTrailer"></a>
# **createTrailer**
> TrailerDto createTrailer(opts)



### Example
```javascript
import {TrailersAppapi} from 'trailers_appapi';

let apiInstance = new TrailersAppapi.TrailersApi();
let opts = { 
  'body': new TrailersAppapi.CreateTrailerDto() // CreateTrailerDto | 
};
apiInstance.createTrailer(opts, (error, data, response) => {
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
 **body** | [**CreateTrailerDto**](CreateTrailerDto.md)|  | [optional] 

### Return type

[**TrailerDto**](TrailerDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="deleteTrailer"></a>
# **deleteTrailer**
> deleteTrailer(id, opts)



### Example
```javascript
import {TrailersAppapi} from 'trailers_appapi';

let apiInstance = new TrailersAppapi.TrailersApi();
let id = "id_example"; // String | 
let opts = { 
  'id': 56 // Number | 
};
apiInstance.deleteTrailer(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **id** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTrailer"></a>
# **updateTrailer**
> updateTrailer(opts)



### Example
```javascript
import {TrailersAppapi} from 'trailers_appapi';

let apiInstance = new TrailersAppapi.TrailersApi();
let opts = { 
  'body': new TrailersAppapi.UpdateTrailerDto() // UpdateTrailerDto | 
};
apiInstance.updateTrailer(opts, (error, data, response) => {
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
 **body** | [**UpdateTrailerDto**](UpdateTrailerDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

