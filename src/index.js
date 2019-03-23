module.exports = function check(str, bracketsConfig) {
     var arr = str.split('');
    var brack = bracketsConfig;
    for(var i=0;i<arr.length;i++){
      for(var j=0; j<brack.length; j++){
        if(arr[i] === brack[j][0] && arr[i+1] === brack[j][1]){
          arr.splice(i,2);
          if (arr.length==0){ 
              return true;
          }
          i=-1;
        }
      }
    }
    return false;
}

