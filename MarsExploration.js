process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var S = readLine();
    var n = (S.length)/3;
   // console.log(n+" "+S.length);
    var counter = 0 , result = 0; 
   
    for(var i = 0 ; i < n ; i ++){
        if(S.charAt(counter) != "S"){
            result++;
        }
        
        if(S.charAt(counter+1) != "O"){
            result++;
        }
        
        if(S.charAt(counter+2) != "S"){
            result++;
        }
        
        counter += 3;
    }
    
    console.log(result);
}
