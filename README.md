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



## Example Illustration through postman
Send a POST request to one of the endpoints(1-9) mentioned above with key being word 'image' and value being the image you want to analyze in the form-data section of body. You can upload an image in POSTMAN by hovering on the Key dropdown to reveal the secret dropdown from which you can choose the file option as shown below:
<img width="1005" alt="Screenshot 2024-05-02 at 6 21 13 AM" src="https://github.com/rekhadevi1/ITIS-6177-SI-Project/assets/156479253/2a9a7899-3742-4f04-88e7-9f569648f3dd">


Example for a request to the description endpoint(2) and the response received are shown below:  
  
<img width="855" alt="Screenshot 2024-05-02 at 5 55 59 AM" src="https://github.com/rekhadevi1/ITIS-6177-SI-Project/assets/156479253/e764bd8b-ec3c-4a4e-8376-65ef59f68f5c">
<img width="1019" alt="Screenshot 2024-05-02 at 5 56 32 AM" src="https://github.com/rekhadevi1/ITIS-6177-SI-Project/assets/156479253/d0ee602b-804c-43fa-868d-2beeae0f7777">

## Example Illustration through Swagger
Send a GET request to endpoint(10) to access the swagger documentation:  
<img width="1440" alt="Screenshot 2024-05-02 at 5 51 30 AM" src="https://github.com/rekhadevi1/ITIS-6177-SI-Project/assets/156479253/bdfa7e62-9840-4e63-8317-4d3063a96374">
<img width="1438" alt="Screenshot 2024-05-02 at 5 51 41 AM" src="https://github.com/rekhadevi1/ITIS-6177-SI-Project/assets/156479253/549d3ec6-6e55-4bec-a0fe-5419bf513b4d">
Upon clicking the /analyze/description bar, we can see the following expanded layout:  
<img width="1413" alt="Screenshot 2024-05-02 at 5 53 18 AM" src="https://github.com/rekhadevi1/ITIS-6177-SI-Project/assets/156479253/5a1690d0-bb96-4b69-bdcc-bc5fcd630072">
Click on the 'Try it out', you can see the Choose File button and Execute button becoming active as shown below:
<img width="1414" alt="Screenshot 2024-05-02 at 5 53 34 AM" src="https://github.com/rekhadevi1/ITIS-6177-SI-Project/assets/156479253/9d6229db-53c5-480f-969b-a9f9c3c4c1cf">
Choose the image to be analyzed and click execute to the result as shown below:  
<img width="1426" alt="Screenshot 2024-05-02 at 5 54 59 AM" src="https://github.com/rekhadevi1/ITIS-6177-SI-Project/assets/156479253/f7cd7f2a-ce8a-49cd-90e8-5e9197f1c710">
<img width="1440" alt="Screenshot 2024-05-02 at 5 55 19 AM" src="https://github.com/rekhadevi1/ITIS-6177-SI-Project/assets/156479253/57867dbb-d5df-4c0d-b9f4-62ab0456662e">



