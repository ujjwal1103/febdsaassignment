


// calculating mean
function findMean(a,n)
{
	let sum = 0;
	for (let i = 0; i < n; i++)
		sum += a[i];

	return sum / n;
}


function findMedian(a,n)
{

	a.sort();


	if (n % 2 != 0)
		return a[n / 2];

	return (a[Math.floor((n-1)/2)] +
			a[n / 2]) / 2;
}

// Driver Code

let a = [1, 3, 4, 2, 7, 5, 8, 6]
let n = a.length;

// Function call
console.log("Mean = " + findMean(a, n) );
console.log("Median = " + findMedian(a, n));



