// !Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//  !Input: nums = [1,3,5,6], target = 2 Output: 1 

// !Input: nums = [1,3,5,6], target = 7 Output: 4
function BinarySearch(arr, target){
    let low=0;
    let high=arr.length-1;
    let i=0;
    
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

       if(target<arr[mid]){
           high=mid-1;
           for(i=low;i<high;i++){
               if(target>=low&&target<=high){
                  return i;
               }
           }
       }
      else if(target>arr[mid]) {
          
         low=mid+1;
           for(i=low;i<high;i++){
               if(target>=low&&target<=high){
                  return i;
               }
           } 
      }
          
          else{
             return mid;
          }
   
    }
    return i;
}

let arr=[1,3,5,6];
let target=4;
console.log(BinarySearch(arr,target));
    
