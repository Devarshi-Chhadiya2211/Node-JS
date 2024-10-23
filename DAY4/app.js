// In Node.js, unlink() is a method provided by the fs (file system) module 
// that allows you to delete a file from the file system.

const fs = require('fs');

try {
  fs.unlinkSync('unlink.txt');
  console.log('File deleted successfully');
} catch (err) {
  console.error('Error deleting the file:', err);
}
