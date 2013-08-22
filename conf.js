var DEBUG = (process.env.NODE_ENV !== 'production');

var DEVCSTRING = 'mongodb://127.0.0.1:27017/cosy';
var S3SECRET = "";
var S3KEY = "";

module.exports = {
  db: {
    cs: DEBUG ? DEVCSTRING : DEVCSTRING
  },
  s3: {
    secret: S3SECRET,
    key: S3KEY,
    bucket: {
      components: DEBUG ? "test" : "test"
    }
  },
  version: "0.0.0"
};