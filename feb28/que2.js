var intersection = function(nums1, nums2) {
    if (nums1.length === 0 || nums2.length === 0) return [];
    let hash = new Map();
    for (let i = 0; i < nums1.length; i++) {
        hash.set(nums1[i], nums1[i]);
    }
    
    let result = [];
    for (let i = 0; i <nums2.length; i++) {
        if (hash.has(nums2[i])) {
            result.push(nums2[i]);
            hash.delete(nums2[i]);
        }
    }
    
    return result;
};

var nums1 = [1,2,2,1,3,4]
var nums2 = [2,2,1,3]
console.log(intersection(nums1,nums2))