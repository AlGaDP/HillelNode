import axios from "axios"
import fs from "fs"

async function processImage(imageUrl, filePath) {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        await fs.writeFile(filePath, response.data, (err) => {
            if (err) {
                console.error('Error saving image:', err);
                throw err;
            } else {
                console.log(`Image successfully downloaded and saved at ${filePath}`);
            }
        });

        return Promise.resolve();
    } catch (error) {
        console.error('Error processing image:', error);
        return Promise.reject(error);
    }
}


const imageUrl = 'https://devzone.org.ua/storage/posts/2023/08/03/71/WyrhWxFSgfOboJUlOh93CviDnJf70cYjevHVPsn8.webp';
const filePath = 'image.jpg';

processImage(imageUrl, filePath)
    .then(() => {
        console.log('Image processing completed successfully');
    })
    .catch((error) => {
        console.error('Image processing failed:', error);
    });