/*
  @file generateImageList.js
  @description
  This script generates a JSON file containing a list of image file paths from the 'public/images/galery' directory. 
  It scans the directory for image files (with extensions .jpg, .jpeg, .png, .gif, .webp), then creates a JSON file 
  (`imageList.json`) that stores the paths of these images, which can be used on the frontend of the application.

  @usage
  Run this script with node to automatically generate or update the `imageList.json` file. This file will be used 
  to dynamically load image paths into the gallery on the website.

  @note
  The image list is saved in a JSON format in data/ 
  The script is configured to be automatically run when the app is build (see package.json)

  @example
  After running this script, the `data/imageList.json` file will contain a JSON array of image paths:
  [
    "/images/galery/image1.jpg",
    "/images/galery/image2.png",
    "/images/galery/image3.gif"
  ]
  
  @author
    Yohann Delacroix
*/

const fs = require('fs');
const path = require('path');

// Define where the images will be stored
const imagesDirectory = path.join(__dirname, 'public', 'images', 'galery');
const outputFilePath = path.join(__dirname, 'data', 'imageList.json');


// Generate the image list
const generateImageList = () => {
    // Read the directory contents (image files)
    fs.readdir(imagesDirectory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        // Filter the files to only include images with specific extensions
        const imageFiles = files.filter((file) =>
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );

        // Map the image files to their relative URLs for use in the frontend
        const imagePaths = imageFiles.map((file) => `/images/galery/${file}`);

        // Write the image paths to the output JSON file
        fs.writeFile(outputFilePath, JSON.stringify(imagePaths, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Image list generated successfully.');
            }
        });
    }); 
};

generateImageList();