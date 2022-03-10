var addTwoNumbers = function(l1, l2) {
 
    let l3 =[l1.length + l2.length];
    let i = 0 ;
    let j = 0;
    
    let k = 0;
    
    while( i <l1.length && j < l2.length){
        if(l1[i]<l2[j]){ 
            l3[k]=l1[i];
            k++;
            i++;
        
        }
        else{
            l3[k]=l2[j];
            k++;
            j++;
        }
    }
  
    console.log(l3)
   };
   let l1= [1,2,4]
   let l2 = [1,3,4]
   addTwoNumbers(l1,l2)