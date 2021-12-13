const uploader = require('../asyncqueue')
const fileUpload = new uploader.fileUploadQueue();

fileUpload.add('1', 'file1');
fileUpload.start();
fileUpload.add('2', 'file2');
