var async = require("async");
var fs = require("fs");
// async.concatSeries(['controllers','routes','models'], fs.readdir, function(err, files) {
//     // files is now a list of filenames that exist in the 3 directories
//     if (err) {
//     	console.log(err);
//     }
//     console.log(files);
// });
// async.concatSeries(['views'], fs.readdir, function(err, files) {
//     // files is now a list of filenames that exist in the 3 directories
//     if (err) {
//     	console.log(err);
//     }
//     console.log(files);
// });
var openFiles =['controllers','routes','models'];
async.each(openFiles, function(file, callback) {

    // Perform operation on file here.
    console.log('Processing file ' + file);

    if( file.length > 10 ) {
      console.log('This file name is too long');
      callback('File name too long');
    } else {
      // Do work to process file here
      console.log('File processed');
      callback();
    }
}, function(err) {
    // if any of the file processing produced an error, err would equal that error
    if( err ) {
      // One of the iterations produced an error.
      // All processing will now stop.
      console.log('A file failed to process');
    } else {
      console.log('All files have been processed successfully');
    }
});