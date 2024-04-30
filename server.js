const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const fs = require('fs');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const validator = require('validator');

const { ComputerVisionClient } = require('@azure/cognitiveservices-computervision');
const { CognitiveServicesCredentials } = require('@azure/ms-rest-azure-js');

require("dotenv").config();

const options = {
	swaggerDefinition: {
		info: {
			title: 'Final Project',
			version: '1.0.0',
			description: 'Image Analysis'
		},
		host: '67.205.136.244:3000',
		basePath: '/'
	},
	apis: ['./server.js']
};
const specs = swaggerJsdoc(options);


const endpoint = process.env['VISION_ENDPOINT'];
const key = process.env['VISION_KEY'];

const client = new ComputerVisionClient(new CognitiveServicesCredentials(key), endpoint);

app.use('/docs',swaggerUi.serve,swaggerUi.setup(specs));
app.use(cors());
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

const sanitizeAndValidateInput = (req,res,next) => {
	if(req.file){
		let input_type = req.file.mimetype;
		if (input_type!=='image/jpg' && input_type!=='image/jpeg' && input_type!=='image/png'){
			return res.status(400).json({error: 'Invalid input data'});
		}
	} 
	next();
};

/**
 * @swagger
 * /analyze/categories:
 *   post:
 *     description: Analyzes the provided image for categories
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         required: true
 *         type: file
 *         description: Upload the image to be analyzed
 *     responses:
 *       '200':
 *         description: Categories present in image
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
app.post('/analyze/categories',upload.single('image'),sanitizeAndValidateInput,(req,res)=>{

    	if (!req.file) {
        	return res.status(400).json({ error: 'No file uploaded.' });
    	}

	fs.readFile(req.file.path, (err, data) => {
        	if (err) {
            		return res.status(500).json({ error: 'Error reading the file.' });
        	}

		let imagePath = req.file.path;
		client.analyzeImageInStream(data,{ visualFeatures: ['Categories'] })
        	.then(result => res.json(result))
        	.catch(err => {
			console.log(err.stack);
			res.status(500).json({ error: 'An error occurred while analyzing the image.' });
		});
	});
});

/**
 * @swagger
 * /analyze/description:
 *   post:
 *     description: Analyzes the provided image to provide a description
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         required: true
 *         type: file
 *         description: Upload the image to be analyzed
 *     responses:
 *       '200':
 *         description: Description for the image
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
app.post('/analyze/description',upload.single('image'),sanitizeAndValidateInput,(req,res)=>{
    
        if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
        }

        fs.readFile(req.file.path, (err, data) => {
                if (err) {
                        return res.status(500).json({ error: 'Error reading the file.' });
                }

                let imagePath = req.file.path;
                client.analyzeImageInStream(data,{ visualFeatures: ['Description'] })
                .then(result => res.json(result))
                .catch(err => {
                        console.log(err.stack);
                        res.status(500).json({ error: 'An error occurred while analyzing the image.' });
                });
        });
});

/**
 * @swagger
 * /analyze/tags:
 *   post:
 *     description: Analyzes the provided image for tags
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         required: true
 *         type: file
 *         description: Upload the image to be analyzed
 *     responses:
 *       '200':
 *         description: Tags present in image
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
app.post('/analyze/tags',upload.single('image'),sanitizeAndValidateInput,(req,res)=>{
    
        if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
        }

        fs.readFile(req.file.path, (err, data) => {
                if (err) {
                        return res.status(500).json({ error: 'Error reading the file.' });
                }

                let imagePath = req.file.path;
                client.analyzeImageInStream(data,{ visualFeatures: ['Tags'] })
                .then(result => res.json(result))
                .catch(err => {
                        console.log(err.stack);
                        res.status(500).json({ error: 'An error occurred while analyzing the image.' });
                });
        });
});

/**
 * @swagger
 * /analyze/adult:
 *   post:
 *     description: Analyzes the provided image for adult content
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         required: true
 *         type: file
 *         description: Upload the image to be analyzed
 *     responses:
 *       '200':
 *         description: Adult content present in image
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
app.post('/analyze/adult',upload.single('image'),sanitizeAndValidateInput,(req,res)=>{
    
        if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
        }

        fs.readFile(req.file.path, (err, data) => {
                if (err) {
                        return res.status(500).json({ error: 'Error reading the file.' });
                }

                let imagePath = req.file.path;
                client.analyzeImageInStream(data,{ visualFeatures: ['Adult'] })
                .then(result => res.json(result))
                .catch(err => {
                        console.log(err.stack);
                        res.status(500).json({ error: 'An error occurred while analyzing the image.' });
                });
        });
});

/**
 * @swagger
 * /analyze/faces:
 *   post:
 *     description: Analyzes the provided image for faces
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         required: true
 *         type: file
 *         description: Upload the image to be analyzed
 *     responses:
 *       '200':
 *         description: Faces present in image
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
app.post('/analyze/faces',upload.single('image'),sanitizeAndValidateInput,(req,res)=>{
    
        if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
        }

        fs.readFile(req.file.path, (err, data) => {
                if (err) {
                        return res.status(500).json({ error: 'Error reading the file.' });
                }

                let imagePath = req.file.path;
                client.analyzeImageInStream(data,{ visualFeatures: ['Faces'] })
                .then(result => res.json(result))
                .catch(err => {
                        console.log(err.stack);
                        res.status(500).json({ error: 'An error occurred while analyzing the image.' });
                });
        });
});

/**
 * @swagger
 * /analyze/color:
 *   post:
 *     description: Analyzes the provided image for color
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         required: true
 *         type: file
 *         description: Upload the image to be analyzed
 *     responses:
 *       '200':
 *         description: Color present in image
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
app.post('/analyze/color',upload.single('image'),sanitizeAndValidateInput,(req,res)=>{
    
        if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
        }

        fs.readFile(req.file.path, (err, data) => {
                if (err) {
                        return res.status(500).json({ error: 'Error reading the file.' });
                }

                let imagePath = req.file.path;
                client.analyzeImageInStream(data,{ visualFeatures: ['Color'] })
                .then(result => res.json(result))
                .catch(err => {
                        console.log(err.stack);
                        res.status(500).json({ error: 'An error occurred while analyzing the image.' });
                });
        });
});

/**
 * @swagger
 * /analyze/imagetype:
 *   post:
 *     description: Analyzes the provided image for imagetype
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         required: true
 *         type: file
 *         description: Upload the image to be analyzed
 *     responses:
 *       '200':
 *         description: Type of image
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
app.post('/analyze/imagetype',upload.single('image'),sanitizeAndValidateInput,(req,res)=>{
    
        if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
        }

        fs.readFile(req.file.path, (err, data) => {
                if (err) {
                        return res.status(500).json({ error: 'Error reading the file.' });
                }

                let imagePath = req.file.path;
                client.analyzeImageInStream(data,{ visualFeatures: ['ImageType'] })
                .then(result => res.json(result))
                .catch(err => {
                        console.log(err.stack);
                        res.status(500).json({ error: 'An error occurred while analyzing the image.' });
                });
        });
});

/**
 * @swagger
 * /analyze/objects:
 *   post:
 *     description: Analyzes the provided image for objects
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         required: true
 *         type: file
 *         description: Upload the image to be analyzed
 *     responses:
 *       '200':
 *         description: Objects present in image
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
app.post('/analyze/objects',upload.single('image'),sanitizeAndValidateInput,(req,res)=>{
    
        if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
        }

        fs.readFile(req.file.path, (err, data) => {
                if (err) {
                        return res.status(500).json({ error: 'Error reading the file.' });
                }

                let imagePath = req.file.path;
                client.analyzeImageInStream(data,{ visualFeatures: ['Objects'] })
                .then(result => res.json(result))
                .catch(err => {
                        console.log(err.stack);
                        res.status(500).json({ error: 'An error occurred while analyzing the image.' });
                });
        });
});

/**
 * @swagger
 * /analyze/brands:
 *   post:
 *     description: Analyzes the provided image for brands
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         required: true
 *         type: file
 *         description: Upload the image to be analyzed
 *     responses:
 *       '200':
 *         description: Brands present in image
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
app.post('/analyze/brands',upload.single('image'),sanitizeAndValidateInput,(req,res)=>{
    
        if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
        }

        fs.readFile(req.file.path, (err, data) => {
                if (err) {
                        return res.status(500).json({ error: 'Error reading the file.' });
                }

                let imagePath = req.file.path;
                client.analyzeImageInStream(data,{ visualFeatures: ['Brands'] })
                .then(result => res.json(result))
                .catch(err => {
                        console.log(err.stack);
                        res.status(500).json({ error: 'An error occurred while analyzing the image.' });
                });
        });
});

app.listen(port,() => {
        console.log(`API listening at http://67.205.136.244:${port}`);
});    
