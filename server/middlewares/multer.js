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

// File filter to allow only specific file types (images)
const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Only image files are allowed!'), false); // Reject the file if it's not an image
    }
    cb(null, true); // Accept the file if it's an image
};

// Set up multer with the storage configuration, file filter, and size limit
export const uploadFiles = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
}).single('file'); // Handle single file uploads with field name "file"
