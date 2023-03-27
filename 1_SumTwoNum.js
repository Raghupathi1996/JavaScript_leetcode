const twoSum = function(nums, target) {
    let myObject = {};
    for(let i = 0; i<nums.length; i++) {
        let complement = target - nums[i];
        if(myObject.hasOwnProperty(complement)){
            return [myObject[complement], i]
        }
        myObject[nums[i]] = i;
        console.log(myObject);
    }
    return [-1,-1];
}

// can also be done using the use of keyword `indexOf`
// var twoSum = function(nums, target) {
//     for (let i = 0; i<nums.length; i++){
//       x = target - nums[i];
//       console.log(nums.indexOf(x));
//       if(nums.indexOf(x)!=-1){
//         if(i!=nums.indexOf(x)){
  
//         number = [i,nums.indexOf(x)];
//         break;
//         }
//       }
//     }
//     return number  
// };

// can also be done using the use of keyword `in`
// var twoSum = function(nums, target) {
//     var hash = {};
//     var len = nums.length;
//     for (var i = 0; i < len; i++) {
//       if (nums[i] in hash) return [hash[nums[i]], i];
//       hash[target - nums[i]] = i
//     }
//     return [-1, -1];
//   };

// General method
// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         for(let j=0;j<nums.length;j++){           
//                 if(j===i) continue;
//                 if(nums[j]+nums[i]==target) return [i,j]                    
//         }
//     }   
// };

let result = twoSum([2,7,11,15], 18);
console.log(result)
