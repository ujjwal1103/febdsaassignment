// ! Question 3:  Given a sorted array of non-negative distinct integers, find the smallest missing non-negative element in it.
// !Input:  nums[] = [0, 1, 2, 6, 9, 11, 15]
// !Output: The smallest missing element is 3
//-----------------------------------------------
   function  missingNumber(arr){
       let r = -1;
        for( i=0;i<arr.length;i++){
            if(arr[i]!=i){
                r = i;
            }
        }
        return r;
    }
   
        let n1=[0, 1, 2, 6, 9, 11, 15];
        let n2=[1, 2, 3, 4, 6, 9, 11, 15];
        let n3=[0, 1, 2, 3, 4, 5, 6 ,8];
        console.log(missingNumber(n1));
        console.log(missingNumber(n2));
        console.log(missingNumber(n3));

   