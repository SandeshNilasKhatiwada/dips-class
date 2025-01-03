const multer = require('multer');
const path = require('path');

// Configure storage to store files in the 'uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = './uploads'; // Store files in 'uploads' directory
    cb(null, uploadPath); // Save files in this path
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname),
    ); // Unique filename
  },
});

// Define multer upload instance
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Max file size of 10MB
}).single('file'); // Accept single file upload with field name 'file'

module.exports = upload;
