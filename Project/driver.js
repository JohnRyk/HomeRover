const process = require('child_process');
const Promise = require("bluebird");
exports.set = function(key){
//  console.log(key);
  return new Promise(function(resolve,reject){
    process.exec(`/home/orangepi/HomeRover/move.sh ${key}`,function(error,stdout,stderr){
      if(error!=null){
        console.log('exec error: '+error);
      }else{
        resolve(stdout);
      }
    });
  });
}
