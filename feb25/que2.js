// ! Question 2: For the given array = ['a','b','d','e','f','g','h','i','x','z'] use binary search to find the target element = 'z'.
//-----------------------------------------------


function binarySearch(arr,x,flag){
    var l = 0;
    var r = -7;
    x = x.charCodeAt(0);
    var h = arr.length -1;
    
    while(l<=h){
        var m = Math.round(l + (h-l)/2);
        
        if(arr[m].charCodeAt(0) === x ){
            return m;
            
        }
        else if (arr[m].charCodeAt(0)<x){
            l = m + 1;
        }
        else{
            h = m - 1
        }  
    }
    
    return r;
}

var arr = ['a','b','d','e','f','g','h','i','x','z'];
var x = 'e';
var result = binarySearch(arr,x,true);

console.log(result);
