const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, 'public', 'images', 'galery');
const outputFilePath = path.join(__dirname, 'data', 'imageList.json');

const generateImageList = () => {
    fs.readdir(imagesDirectory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        const imageFiles = files.filter((file) =>
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );

        const imagePaths = imageFiles.map((file) => `/images/galery/${file}`);

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