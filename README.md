# ITIS-6177-SI-Project
Created an API to connect to  Azure AI Vision-Image Analysis API 
## Azure AI Vision - Image Analysis 
Azure AI Vision Image Analysis is a service provided by Microsoft Azure that allows developers to analyze images using artificial intelligence (AI) capabilities. It enables you to extract valuable insights and information from images, such as identifying objects, generating description, detecting faces, determining image characteristics, and more.
## Our ImageAnalysis API
Our API serves as a intermediary API between the user and the Azure API. Instead of having to create an account on Azure and configure it, the user can directly send the requests through our API to the Azure API and get responses back. This README serves as a detailed guide to use our API.
## Our ImageAnalysis API Endpoints
- http://67.205.136.244:3000/analyze/categories
- http://67.205.136.244:3000/analyze/description
- http://67.205.136.244:3000/analyze/tags
- http://67.205.136.244:3000/analyze/adult
- http://67.205.136.244:3000/analyze/faces
- http://67.205.136.244:3000/analyze/color
- http://67.205.136.244:3000/analyze/imagetype
- http://67.205.136.244:3000/analyze/objects
- http://67.205.136.244:3000/analyze/brands
- http://67.205.136.244:3000/docs
## Description of Endpoints
#### 1. http://67.205.136.244:3000/analyze/categories
Protocol: HTTP  
HTTP Method: POST  
Request Body: Image  
Response: An array indicating identified categories in the input image.
#### 2. http://67.205.136.244:3000/analyze/description
Protocol: HTTP  
HTTP Method: POST  
Request Body: Image  
Response: A collection of content tags for the input image, along with a list of captions sorted by confidence level, and image metadata.
#### 3. http://67.205.136.244:3000/analyze/tags
Protocol: HTTP  
HTTP Method: POST  
Request Body: Image  
Response: A list of tags with confidence level for the input image.
#### 4. http://67.205.136.244:3000/analyze/adult
Protocol: HTTP  
HTTP Method: POST  
Request Body: Image  
Response: An object describing whether the input image contains adult-oriented content and/or is racy.
#### 5. http://67.205.136.244:3000/analyze/faces
Protocol: HTTP  
HTTP Method: POST  
Request Body: Image  
Response: An array of possible faces within the input image.
#### 6. http://67.205.136.244:3000/analyze/color
Protocol: HTTP  
HTTP Method: POST  
Request Body: Image  
Response: An object providing additional metadata describing color attributes for the input image.
#### 7. http://67.205.136.244:3000/analyze/imagetype
Protocol: HTTP  
HTTP Method: POST  
Request Body: Image  
Response: An object providing possible image types and matching confidence levels for the input image.
#### 8. http://67.205.136.244:3000/analyze/objects
Protocol: HTTP  
HTTP Method: POST  
Request Body: Image  
Response: Array of objects describing what was detected in the input image.
#### 9. http://67.205.136.244:3000/analyze/brands
Protocol: HTTP  
HTTP Method: POST  
Request Body: Image  
Response: Array of brands detected in the input image.
#### 10. http://67.205.136.244:3000/docs
Protocol: HTTP  
HTTP Method: GET   
Response: Swagger documentation for our Image Analysis API.  
  
#### Reference links:
1. Different features that can be extracted from the image:   
https://learn.microsoft.com/en-us/rest/api/computervision/analyze-image/analyze-image?view=rest-computervision-v3.1&tabs=HTTP#imageanalysis
2. How to interpret the response:   
https://learn.microsoft.com/en-us/rest/api/computervision/analyze-image/analyze-image?view=rest-computervision-v3.1&tabs=HTTP#adultinfo
