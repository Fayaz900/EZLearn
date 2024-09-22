import multer from 'multer';
import path from 'path'; // Import the path module

// Configure storage for uploaded files
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads'); // Specify the destination folder
    },
    filename(req, file, cb) {
        // Ensure that the filename is unique using a timestamp and the original name
        cb(null, Date.now() + '-' + path.basename(file.originalname));
    }
});

// Set up multer with the storage configuration, file filter, and size limit
export const uploadFiles = multer({
    storage: storage, 
}).single('file'); // Handle single file uploads with field name "file"
