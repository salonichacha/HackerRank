function processData(input) {
    var temp = input.split('\n');
    var n = temp[0];
    var S ;
    var R ; 
    var x , y , counter;
    for(var i = 1 ; i < temp.length ; i++){
        S = temp[i];
        R = temp[i].split('').reverse().join('');
        counter = 0 ;
        for(var j = 1; j < S.length; j++){
            x = S.charCodeAt(j) - S.charCodeAt(j-1);
            y = R.charCodeAt(j) - R.charCodeAt(j-1);
            
            if(Math.abs(x) == Math.abs(y)){
                counter++;
            }
        }
        
        if(counter == S.length-1){
            console.log("Funny");
        }
        
        else{
            console.log("Not Funny");
        }
    }
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
