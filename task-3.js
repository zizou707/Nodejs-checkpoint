var fs = require("fs");


fs.writeFile('welcome.txt', 'Hello Node!',function(err){
    if (err){console.error(err);}
});
fs.readFile('welcome.txt', function (err, data) {
  if (err) {console.error(err);}
    console.log(''+ data);
 });