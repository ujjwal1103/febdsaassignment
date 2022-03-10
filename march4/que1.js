function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
 
// An optimized version of Bubble Sort
function bubbleSort( arr, n)
{
var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
         
        }
    }
 
}
}
var newarr = []
/* Function to print an array */
function printArray(arr, size)
{
    var i;
    
    for (i=0; i < size; i++)
    newarr.push(arr[i])

 console.log(newarr)
   
}
 
// Driver program to test above functions
  var arr = [2,0,2,1,1,0]
    var n = arr.length;
   
 
    bubbleSort(arr, n);
    
    printArray(arr, n);
