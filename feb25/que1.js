// ! Quetion : 1. Find the frequency of an element in a sorted array with duplicates present. for eg: [1,1,2,2,4,5,5,6,6,6,6,9,10,11] and target = 6 using binary search. 

//-----------------------------------------------
function freuencyCount(arr,x,flag){
    var l = 0;
    var r = -7;
    var h = arr.length -1;
    while(l<=h){
        var m = Math.round(l + (h-l)/2);
        if(arr[m] === x ){
            r = m;
            if(flag === true){
                h = m-1
            }
            else{
                l = m +1;
            }
        }
        else if (arr[m]<x){
            l = m + 1;
        }
        else{
            h = m - 1
        }  
    }
    
    return r;
}

var arr = [2,3,3,4,5,5,5,5,6,6,6,7,8,9];
var x = 6;
var lB = freuencyCount(arr,x,true);
var uB = freuencyCount(arr,x,false);
var count = uB - lB + 1;
console.log(count);
