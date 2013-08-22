var knox = require("knox"),
    conf = require("../conf");

var getClient = function (bucketName) {
    return knox.createClient({
        key: conf.s3.key,
        secret: conf.s3.secret,
        bucket: bucketName
    });
};

var createHeader = function (type, length) {
    return {
        "Content-Type": type,
        "Content-Length": length,
        "x-amz-acl": "public-read",
        "Cache-Control": "public,max-age=290304000"
    };
};

var uploadFromBuffer = function (buf, fileName, bucket, type, callback) {
    var client = getClient(bucket),
        headers = createHeader("application/octet-stream", buf.length);

    client.putBuffer(buf, fileName, headers, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("I am in uploadFromBuffer and I will callback");

        callback(client.url("/" + fileName));
    });
};


var cloudHelper = {
    upload: function(component, bytes, cb) {
        var bu = new Buffer(req.body.package, 'base64');
        //var content = fs.writeFileSync( "./test.zip", bu );
        uploadFromBuffer(bu, component.packageName, conf.s3.bucket.component, "zip", cb);
    }
};

module.exports = cloudHelper;