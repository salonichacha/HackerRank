function processData(input) {
    //Enter your code here
    var temp = input.split('\n');
    var t = "abcdefghijklmnopqrstuvwxyz";
    var tarr = [];
    var x, y, z;
    for(var i = 0 ; i < t.length; i++){
        x = t[i];
        tarr[x] = 0 ;
    }
    
    for(var j = 1 ; j < temp.length ; j++){
        y = temp[j].split('');
        z = [];
        for(var k = 0 ; k < y.length; k++){
            if(!z.includes(y[k])){
                tarr[y[k]] = tarr[y[k]] + 1 ;
                z.push(y[k]);  
            }
        }
    }
    
    var counter = 0 ; 
    for(var i = 0 ; i < t.length ; i++){
        if(tarr[t.charAt(i)] == temp[0]) counter++;
    }
    
    console.log(counter);
 } 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});