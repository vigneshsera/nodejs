var http = require('http');
var dt = require('./myDateTime');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var formidable = require('formidable');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vickysekar1996@gmail.com',
        pass: 'fiwhmtnkahhuocpm'
    }
});

var mailOptions = {
    from: 'vickysekar1996@gmail.com',
    to: 'vickysekar@icloud.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// var myEventHandler = function() {
//     console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');

// var rs = fs.createReadStream('./new1.txt');
// rs.on('open', function() {
//     console.log('The file is open');
// });

http.createServer(function(req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write("dt ->" + dt.myDateTime() + "\n");
    // res.write(req.url + "\n");
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.write(txt);
    // res.end('Hello World!');

    // read file
    // fs.readFile('index.html', function(err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    // });

    // create file
    // fs.appendFile("new.txt", "new file created\n", function(err) {
    //     if (err) throw err;
    //     console.log("Saved!");
    // })

    // open file
    // fs.open('new.txt', 'w', function(err, file) {
    //     if (err) throw err;
    //     console.log("Saved!");
    // });

    // writeFile file
    // fs.writeFile('new.txt', 'content Modified', function(err, file) {
    //     if (err) throw err;
    //     console.log("Saved!");
    // });

    // delete file
    // fs.unlink('new.txt', function(err) {
    //     if (err) throw err;
    //     console.log("File Deleted");
    // })

    // rename file
    // fs.rename('new.txt', 'new1.txt', function(err) {
    //     if (err) throw err;
    //     console.log("Renamed");
    // })


    // var q = url.parse(req.url, true);
    // var filename = "." + q.pathname;
    // fs.readFile(filename, function(err, data) {
    //     if (err) {
    //         res.writeHead(404, { 'Content-Type': 'text/html' });
    //         return res.end("404 Not Found");
    //     }
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    // });

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write(uc.upperCase("Hello World!"));
    // res.end();

    // fileUpload
    // if (req.url == '/fileupload') {
    //     var form = new formidable.IncomingForm();
    //     form.parse(req, function(err, fields, files) {
    //         var oldpath = files.filetoupload.filepath;
    //         var newpath = 'C:/Users/VIGNES~1/' + files.filetoupload.originalFilename;
    //         fs.rename(oldpath, newpath, function(err) {
    //             if (err) throw err;
    //             res.write('File uploaded and moved!');
    //             res.end();
    //         });
    //     });
    // } else {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    //     res.write('<input type="file" name="filetoupload"><br>');
    //     res.write('<input type="submit">');
    //     res.write('</form>');
    //     return res.end();
    // }


}).listen(8555);