

  function findNumber(nums) {
    const n = nums.length;
    for (let i = 0; i <= n; i++) {
      if (!nums.includes(i)) {
        return i;
      }
    }
  }
  
  // Example 1
  const nums1 = [3, 0, 1];
  console.log("Example 1:", findNumber(nums1)); // Output: 2
  
  // Example 2
  const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  console.log("Example 2:", findNumber(nums2)); // Output: 8
  
  // Example 3
  const nums3 = [0, 1];
  console.log("Example 3:", findNumber(nums3)); // Output: 2
  