const firstMissingPositive = function(nums) {
    if(nums == null || nums.length == 0) return 1;
     for (let i = 0; i < nums.length; i++) {
         let current = nums[i];
         while (current - 1 <= 0 && current - 1 < nums.length && current !== nums[current - 1]) {
              let next = nums[current-1];
                 nums[current-1] = current;
                 current = next;
         }
     }
     for(let i = 0;i< nums.length;i++){                     
             if(nums[i] != i+1) return i+1;
      }
         return nums.length+1; 
 };