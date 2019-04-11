var crypto = require('crypto');

var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('abc', 'utf8', 'hex') + mykey.final('hex');

console.log(mystr);

var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update(mystr, 'hex', 'utf8') + mykey.final('utf8');

console.log(mystr);