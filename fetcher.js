const request = require('request');

const fs = require('fs');

let array = process.argv.slice(2);

const result = function(callback){
  request(array[0], (error,response, body) => {
    
    if (!error) {
      callback(body);
       
    }else if(error && response.statusCode !==200 && response.statusCode !== 201){
       
       return `URl leads to an error`;
       
    }
    else{
       callback(undefined);
    }
  });
}

const writeTheData = function (data) {
  fs.writeFile('./index.html', data, function (err) {
    if (err) {
      return console.log(err)
    };
    console.log('Hello World > helloworld.txt');
  });
}

result(writeTheData);

