const fs = require('fs');
// src/goodbye/goodbye.js
export default function goodbye(path) {
    fs.readFile(path, 'utf-8', function(err, file) {
        if (err) {
            console.log(err);
            return;
        } else {
            // res.write(file, 'binary');
            // res.end();
            console.log(file);

        }
    });
    console.log("goodbye");
}