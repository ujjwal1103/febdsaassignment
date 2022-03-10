

// A JavaScript program to sort an array according
// to the order defined by another array

	/* A Binary Search based function to find
	index of FIRST occurrence of x in arr[].
	If x is not present, then it returns -1 */
	function first(arr,low,high,x,n)
	{
		if (high >= low) {
			// (low + high)/2;
			let mid = low + Math.floor((high - low) / 2);

			if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x)
				return mid;
			if (x > arr[mid])
				return first(arr, (mid + 1), high,x, n);
			return first(arr, low, (mid - 1), x, n);
		}
		return -1;
	}
	
	// Sort A1[0..m-1] according to the order
	// defined by A2[0..n-1].
	function sortAccording(A1,A2,m,n)
	{
		// The temp array is used to store a copy
		// of A1[] and visited[] is used to mark the
		// visited elements in temp[].
		let temp=[];
		let visited=[];
		
		for (let i = 0; i < m; i++)
		{
			temp[i] = A1[i];
			visited[i] = 0;
		}
		
	
		temp.sort(function(a, b){return a-b});
		
	
		let ind = 0;
		
	
		for (let i = 0; i < n; i++)
		{
		
			let f = first(temp, 0, m - 1, A2[i], m);
			
			if (f == -1)
			{
				continue;
			}
			for (let j = f; (j < m && temp[j] == A2[i]);j++)
			{
				A1[ind++] = temp[j];
				visited[j] = 1;
			}
		}
		
		for (let i = 0; i < m; i++)
		{
			if (visited[i] == 0)
				A1[ind++] = temp[i];
		}
		
	}
	
	
	function printArray(arr,n)
	{
		for (let i = 0; i < n; i++)
		{
			console.log(arr[i] + " ");
			
		}
		;
	}
	

	let A1=[2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8 ];
	let A2=[2, 1, 8, 3 ];
	
	let m = A1.length;
	let n = A2.length;
	console.log("Sorted array is <br>");
	
	sortAccording(A1, A2, m, n);
	printArray(A1, m);
	

	

